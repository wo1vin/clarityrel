

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

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var signupBtn = document.getElementById("signupBtn");
var registerBtn = document.getElementById("registerBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
var signupSpan = document.getElementsByClassName("signupClose")[0];
var registerSpan = document.getElementsByClassName("registerClose")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
//   btn.style.zIndex = "0";
// }
signupBtn.onclick = function() {
  signupModal.style.display = "block";
  signupBtn.style.zIndex = "0";
}
registerBtn.onclick = function() {
  registerModal.style.display = "block";
  registerBtn.style.zIndex = "0";
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

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
}


// CHECKOUT

const button = document.querySelector('#checkout');

button.addEventListener('click',()=>{
    console.log('checkout');
    fetch(`/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
      }),
    })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url 
    })
    .catch(e => {
      console.error(e.error)
    })
})