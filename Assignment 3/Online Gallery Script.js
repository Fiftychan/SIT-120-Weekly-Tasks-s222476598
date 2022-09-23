const hamburgerMenu = document.querySelector('.hamburger-menu')
const wrap = document.querySelector('.wrap')

hamburgerMenu.addEventListener('click', () => wrap.classList.toggle('active'))

const images = ["Example.jpg"]

function getInfo(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email")
}

function checkUser(username, password){
  var usercheck = document.getElementById("usercheck").value;
  var passcheck = document.getElementById("passcheck").value;
  if(usercheck == username && passcheck == password)
  {
    console.log(username + "is logged in!!!")
  }
}

function uploadIMG(){
  var image = document.getElementById("image").value;
  images.push(image)
}