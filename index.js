 let carts = document.querySelectorAll('.button123');
 function refreshRetainNumber() {
    let productNumbers = localStorage.getItem("number");
    if(productNumbers){
       document.querySelector('.contact-list span').textContent =  productNumbers;
    }


 }
 let products = [
   {
     name:'brownie and coffee',
     tag:'product_2',
     price:8,
     inCart:0

   },
   {
     name:'cappuccino',
     tag:'cappuccinocoffee',
     price:10,
     inCart:0

   },
   {
     name:'Coffee Jalapeno',
     tag:'coffeejalapeno',
     price:15,
     inCart:0

   },
   {
     name:'Coffee Cup Special',
     tag:'coffeecupspecial',
     price:15,
     inCart:0

   },
   {
     name:'Borcelle Coffee',
     tag:'borcellecoffee',
     price:10,
     inCart:0

   },
   {
     name:'Iced Cappucino',
     tag:'icedcappucino',
     price:20,
     inCart:0

   }

 ];


console.log(carts)
console.log(products)
let productLenght= products.length
console.log(productLenght)
   for ( let i=0 ; i < productLenght ; i++){
     carts[i].addEventListener('click', (e) => {
       e.preventDefault();
        cartsNumber(products[i]);
        totalCostOfPurchase(products[i]);


   }
   );
   }



function cartsNumber(product) {


   let productNumbers = localStorage.getItem("number");
   productNumbers = parseInt(productNumbers);
   if (productNumbers){
   localStorage.setItem("number", productNumbers + 1);
   document.querySelector('.contact-list span').textContent =  productNumbers + 1 ;
 } else{
   localStorage.setItem("number",  1);
   document.querySelector('.contact-list span').textContent = 1;
 }
  setItem(product);
}

 function setItem(product) {
   let cart= localStorage.getItem("itemincart");
   cart = JSON.parse(cart);
   if (cart != null){

     if( cart[product.tag] == undefined){
       cart = {
         ...cart,
         [product.tag]:product

       }
     }
     cart[product.tag].inCart += 1;
   } else{
     product.inCart=1;

     cart={
       [product.tag]:product
     }
   }


  let check = localStorage.setItem("itemincart" , JSON.stringify(cart) );

 }

 function totalCostOfPurchase(product){
   let cost = localStorage.getItem("totalCost");
   if(cost != null){
     cost = parseInt(cost)
     localStorage.setItem("totalCost" , cost + product.price)
   }else{
     localStorage.setItem("totalCost" , product.price);
   }


 }

 function displayCart(){
   let cartItems = localStorage.getItem("itemincart");
   cartItems = JSON.parse(cartItems);
   let productContainer =  document.querySelector(".products")
   if (cartItems && productContainer ){
     productContainer.innerHTML='';
     Object.values(cartItems).map(item =>{
       productContainer.innerHTML += `
       <div class="product">
         <ion-icon name="close-circle-outline"></ion-icon>
         <img src="./images/${item.tag}.png">
         <span>${item.name}</span>
       </div>
       `
     })
   }


 }


refreshRetainNumber();
displayCart();
