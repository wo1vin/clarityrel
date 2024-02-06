

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


// MODAL

// Get the modal
// var modal = document.getElementById("myModal");
var signupModal = document.getElementById("signupModal");
var registerModal = document.getElementById("registerModal");
var signupModalD = document.getElementById("signupModalD");
var registerModalD = document.getElementById("registerModalD");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var signupBtn = document.getElementById("signupBtn");
var registerBtn = document.getElementById("registerBtn");
var signupBtnD = document.getElementById("signupBtnD");
var registerBtnD = document.getElementById("registerBtnD");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
var signupSpan = document.getElementsByClassName("signupClose")[0];
var registerSpan = document.getElementsByClassName("registerClose")[0];
var signupSpanD = document.getElementsByClassName("signupCloseD")[0];
var registerSpanD = document.getElementsByClassName("registerCloseD")[0];

// When the user clicks on the button, open the modal
signupBtn.onclick = function() {
  signupModal.style.display = "block";
  signupBtn.style.zIndex = "0";
}
registerBtn.onclick = function() {
  registerModal.style.display = "block";
  registerBtn.style.zIndex = "0";
}
signupBtnD.onclick = function() {
  signupModalD.style.display = "block";
  signupBtnD.style.zIndex = "0";
}
registerBtnD.onclick = function() {
  registerModalD.style.display = "block";
  registerBtnD.style.zIndex = "0";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
signupSpan.onclick = function() {
  signupModal.style.display = "none";
}
registerSpan.onclick = function() {
  registerModal.style.display = "none";
}
signupSpanD.onclick = function() {
  signupModalD.style.display = "none";
}
registerSpanD.onclick = function() {
  registerModalD.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  } 
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
  if (event.target == signupModalD) {
    signupModalD.style.display = "none";
  }
  if (event.target == registerModalD) {
    registerModalD.style.display = "none";
  }
}

// PRODUCT MENU / CART
let items = []
const product1 = document.querySelector('#addProduct1');
const product2 = document.querySelector('#addProduct2');
const product1M = document.querySelector('#addProduct1M');
const product2M = document.querySelector('#addProduct2M');

product1.addEventListener('click', addClassToCart);
product1M.addEventListener('click', addClassToCart);
product2.addEventListener('click', addSessionToCart);
product2M.addEventListener('click', addSessionToCart);

function addClassToCart () {
  if(product1.innerText === "Remove from cart" ||
     product1M.innerText === "Remove from cart"){
    product1.innerText = "Add to cart";
    product1M.innerText = "Add to cart";
    items.splice(0,1);
    console.log(items,"Masterclass removed from cart.");
  } else {
    product1.innerText = "Remove from cart";
    product1M.innerText = "Remove from cart";
    items.splice(0,0,{ id: 1, quantity: 1 })
    console.log(items,"Masterclass added to cart.");
  }
}
function addSessionToCart(){
  if(product2.innerText === "Remove from cart" ||
     product2M.innerText === "Remove from cart"){
    product2.innerText = "Add to cart";
    product2M.innerText = "Add to cart";
    items.splice(1,1);
    console.log(items,"Private session removed from cart.");
  } else {
    product2.innerText = "Remove from cart";
    product2M.innerText = "Remove from cart";
    items.splice(1,0,{ id: 2, quantity: 1 });
    console.log(items,"Private session added to cart.");
  }
}

// CHECKOUT

// const button = document.querySelector('#checkout');
const checkoutBtnD = document.querySelector('#checkoutBtnD');
const checkoutBtnM = document.querySelector('#checkoutBtnM');

checkoutBtnD.addEventListener('click',stripeCheckout);
checkoutBtnM.addEventListener('click',stripeCheckout);

function stripeCheckout(){
    console.log('checkout', items);
    fetch(`https://clarityrelationships.com/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: items,
      }),
    })
    .then(res => {
      console.log('fetch sent')
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url 
      console.log('display cart')
    })
    .catch(e => {
      console.log('catch',e)
      //console.error(e.error)
    })
}