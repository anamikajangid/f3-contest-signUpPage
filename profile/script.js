let userDetails = JSON.parse(localStorage.getItem("userDetails"));

console.log(userDetails);

let fullName = document.getElementById("name");
let email = document.getElementById("Email");
let token = document.getElementById("token");
let password = document.getElementById("Password");

fullName.innerText = userDetails.fullName;
email.innerText = userDetails.email;
password.innerText = userDetails.password;
token.innerText = userDetails.Token;

document.getElementById("logOut").addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("userDetails");
  window.location.href = "/index.html";
  console.log("first");
});
