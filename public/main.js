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
// let links = document.querySelectorAll(".links");
// console.log(links)

// MODAL

// Get the modal
// var modal = document.getElementById("myModal");
var signupModal = document.getElementById("signupModal");
// var registerModal = document.getElementById("registerModal");
var signupModalD = document.getElementById("signupModalD");
// var registerModalD = document.getElementById("registerModalD");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var signupBtn = document.getElementById("signupBtn");
var registerBtn = document.getElementById("registerBtn");
var signupBtnD = document.getElementById("signupBtnD");
var registerBtnD = document.getElementById("registerBtnD");

registerBtn.addEventListener('click',register);
registerBtnD.addEventListener('click',register);
function register(){
  console.log('get register');
  window.location.href = '/register';
}

//   //const submit = document.querySelector("#mG61Hd");
// let form = document.querySelector("iframe");
// form.addEventListener('submit', function () {
//   console.log('empty')
//   form.style.display = none;
  
  //const link = form.contentDocument.getElementById('')
// })
// form.contentWindow.addEventListener('submit', function () {
//   console.log('contentW')
//   form.style.display = none;
// })

//   //const subButton = form.querySelector(".hs-button");
      
//     form.addEventListener("submit", (event) => {
//         form.style.height = '300px';
//     })
//   })
// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
var signupSpan = document.getElementsByClassName("signupClose")[0];
// var registerSpan = document.getElementsByClassName("registerClose")[0];
var signupSpanD = document.getElementsByClassName("signupCloseD")[0];
// var registerSpanD = document.getElementsByClassName("registerCloseD")[0];

// When the user clicks on the button, open the modal
signupBtn.onclick = function() {
  signupModal.style.display = "block";
  signupBtn.style.zIndex = "0";
}
// registerBtn.onclick = function() {
//   registerModal.style.display = "block";
//   registerBtn.style.zIndex = "0";
// }
signupBtnD.onclick = function() {
  signupModalD.style.display = "block";
  signupBtnD.style.zIndex = "0";
}
// registerBtnD.onclick = function() {
//   registerModalD.style.display = "block";
//   registerBtnD.style.zIndex = "0";
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
signupSpanD.onclick = function() {
  signupModalD.style.display = "none";
}
// registerSpanD.onclick = function() {
//   registerModalD.style.display = "none";
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