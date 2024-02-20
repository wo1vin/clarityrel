// NAV
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("navLinks");
  let nav = document.getElementById("mobileNav");
  let ham = document.querySelector(".icon");

  if (x.style.display === "contents") {
    x.style.display = "none";
    ham.style.color = 'gray';
    nav.style.backgroundColor = '';
  } else {
    nav.style.width = 'max-content';
    x.style.display = "contents";
    ham.style.color = 'var(--lilac)';
    nav.style.backgroundColor = '#0a2a2ea3';
  }
}

// MODAL
// Get the modal
// Get the button that opens the modal
const signupModal = document.getElementById("signupModal");
const signupBtn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
var signupSpan = document.getElementsByClassName("signupClose")[0];

// When the user clicks on the button, open the modal
signupBtn.addEventListener('click', () => {
  signupModal.style.display = "block";
  signupBtn.style.zIndex = "0";
})

// registerBtn.onclick = function() {
//   registerModal.style.display = "block";
//   registerBtn.style.zIndex = "0";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
signupSpan.onclick = function() {
  signupModal.style.display = "none";
}
// registerSpan.onclick = function() {
//   registerModal.style.display = "none";
// }

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

var registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener('click',register);
function register(){
  console.log('get register');
  window.location.href = '/register';
}