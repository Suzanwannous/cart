let items=document.querySelector(".sportproducts");
let product=document.querySelector(".product");
let tag =document.querySelector(".tag");

const categories=[...new Set(products.map((item)=>{
  return item
}))]

read();

function read(){
let i=0;
items.innerHTML=categories.map((item)=>{
  var{id,image,title,price,discount}=item;
    let discountprice=0;
      if(discount!=0){

        discountprice=(price)-(price)*(discount/100);

      
return(      
    `<div class="product">
          <div id="tag ${id}"
           style="background-color:red;width:max-content;color:white;padding:3px;font-size:15px"
            >${discount}% OFF</div>
          <div id="picture${id}"><img src="${image}"></div>
          <div class="info" style=""
          <div id="title${id}">${title}</div>
          <div class="flex2">
          <p style="font-weight:bold" id="${id}">$${discountprice}.00</p>

          <p style="text-decoration:line-through;color:gray" id="${id}">$${price}.00</p>
       </div>`
       +
       "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+    
       `     </div>`
        )
}
else{
  return(
  `<div class="product">
    <div id="tag ${id}"
     style="background-color:red;width: max-content;color:white;padding:3px;  visibility: hidden;"
      >${discount}% OFF</div>
    <div id="picture${id}"><img src="${image}"></div>
    <div class="info" style=""
    <div style="padding-left=10px" id="title${id}">${title}</div>
    <div class="flex2">
    <p style="font-weight:bold" id="${id}">$${price}.00</p>
  </div>`
  +
  "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+    
  `     </div>` )
}
}
).join('')
    }
      
//search
        document.getElementById("search").addEventListener("keyup",function(){
        let text=document.getElementById("search").value.toLowerCase();
        console.log(text)
      const filter1 =products.filter((e)=>{
          e.title.toLowerCase().includes(text);
        })
        console.log(filter1);
        })
          
   //popup
   const cart=document.getElementById("cart");
   let popup= document.getElementById("popup");
   let home=document.getElementById("home");
   let list=document.getElementById("mycart");

   cart.addEventListener("click",()=>{
  popup.style.display="block";
  home.style.display="block";
  displaycart();
   })
   list.addEventListener("click",()=>{
    popup.style.display="none";
    home.style.display="none";

   })
   

     //add item to cart
  var mycart=[];
  function addtocart(a){
    mycart.push({...categories[a]});
    displaycart();}
  //remove item from cart
  function delet(element){
mycart.splice(element,1);
displaycart();

  }
  //display cart
  function displaycart(a){
    let j=0,total=0;

    document.getElementById("count").innerHTML=mycart.length;
    if(mycart.length==0){
      document.getElementById('cartitem').innerHTML="your cart is empty";
      document.getElementById('total').innerHTML="$"+0+".00";

    }
    else{
      document.getElementById('cartitem').innerHTML=mycart.map ((items)=>{
        var{image,title,price}=items;
total=total+price;
document.getElementById("total").innerHTML="$"+total+".00";
return(
  `<div class="cart-item">
<div class="row-img">
<img class='rowimg' src=${image}>
</div>
<p style='font-size:12px;'>${title}</p>
<h2 style='font-size:15px;'>$ ${price}.00</h2>`+
"<i class='fa-solid fa-trash' onclick='delet("+(j++)+")'></i>"+`</div>`
);
      }).join('');

      
      }
  
  }
  