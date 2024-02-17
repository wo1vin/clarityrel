// NAV
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Show product menu
const buyBtn = document.querySelector('#buyBtn');
const checkoutBtn = document.querySelector('#checkoutBtn');
const itemMenu = document.querySelector('.productContainer');
const form = document.querySelector('.frameContainer');
const advice = document.querySelector('.advice');
const title = document.querySelector('#title');

buyBtn.addEventListener('click', function(){
    title.innerText = 'Checkout';
    itemMenu.style.display = 'block';
    checkoutBtn.style.display = 'inline-block';
    buyBtn.style.display = 'none';
    form.style.display = 'none';
    // advice.style.display = 'block';
})

// PRODUCT MENU / CART
let items = []
const product1 = document.querySelector('#addProduct1');
const product2 = document.querySelector('#addProduct2');

// product1.addEventListener('click', addClassToCart);
product1.addEventListener('click', addClassToCart);
// product2.addEventListener('click', addSessionToCart);
product2.addEventListener('click', addSessionToCart);

function addClassToCart () {
  if(product1.innerText === "Remove"){
    product1.innerText = "Add to cart";
    items.splice(0,1);
    console.log(items,"Masterclass removed from cart.");
  } else {
    product1.innerText = "Remove";
    items.splice(0,0,{ id: 1, quantity: 1 })
    console.log(items,"Masterclass added to cart.");
  }
}
function addSessionToCart(){
  if(product2.innerText === "Remove"){
    product2.innerText = "Add to cart";
    items.splice(1,1);
    console.log(items,"Private session removed from cart.");
  } else {
    product2.innerText = "Remove";
    items.splice(1,0,{ id: 2, quantity: 1 });
    console.log(items,"Private session added to cart.");
  }
}

// CHECKOUT

// const button = document.querySelector('#checkout');

// checkoutBtn.addEventListener('click',function(){
//   console.log('click',items);
// });
// checkoutBtnD.addEventListener('click',stripeCheckout);
checkoutBtn.addEventListener('click',stripeCheckout);

function stripeCheckout(){
    console.log('checkout', items);
    fetch(`/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify({
        items: items,
      }),
    })
    .then( res => {
      console.log(res,'fetch sent')
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log('display cart')
      window.location = url 
    })
    .catch(e => {
      console.log("error")
      console.error(e.error)
    })
}