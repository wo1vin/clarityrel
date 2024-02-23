// NAV
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const mobileNav = document.getElementById("mobileNav");

function useNav() {
  const x = document.getElementById("navLinks");
  const ham = document.querySelector(".icon");

  if (x.style.display === "contents") {
    x.style.display = "none";
    ham.style.color = 'gray';
    mobileNav.style.backgroundColor = '';
  } else {
    mobileNav.style.width = 'max-content';
    x.style.display = "contents";
    ham.style.color = 'var(--lilac)';
    mobileNav.style.backgroundColor = '#0a2a2ea3';
  }
}

// MODAL
// Get the modal
const signupModal = document.getElementById("signupModal");
const contactModal = document.getElementById("contactModal");

// Get the button that opens the modal
const signupBtn = document.getElementById("signupBtn");
const subscribeBtn = document.getElementById("subscribeBtn");
const contactBtn = document.getElementById("contactBtn");
const contactBtnM = document.getElementById("contactBtnM");

// Get the <span> element that closes the modal
const signupSpan = document.getElementsByClassName("signupClose")[0];
const contactSpan = document.getElementsByClassName("contactClose")[0];

// When the user clicks on the button, open the modal
signupBtn.addEventListener('click', signupToggle);
subscribeBtn.addEventListener('click', signupToggle);
contactBtn.addEventListener('click', contactToggle);
contactBtnM.addEventListener('click', contactToggle);

function signupToggle (){
    signupModal.style.display = "block";
    signupBtn.style.zIndex = "0";
}
function contactToggle (){
  // console.log('contact')
    contactModal.style.display = "block";
    contactBtn.style.zIndex = "0";
}
// When the user clicks on <span> (x), close the modal
signupSpan.onclick = function() {
  signupModal.style.display = "none";
}
contactSpan.onclick = function() {
  contactModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  } 
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target == mobileNav) {
    mobileNav.style.display = "none";
  }
}

// get the "Register" button
const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener('click',register);
// send users to the /register.html
function register(){
  console.log('get register');
  window.location.href = '/register';
}