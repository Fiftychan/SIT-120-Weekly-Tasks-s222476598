const hamburgerMenu = document.querySelector('.hamburger-menu')
const wrap = document.querySelector('.wrap')

hamburgerMenu.addEventListener('click', () => wrap.classList.toggle('active'))

const images = ["Example.jpg"]

new Vue ({
  el: '#userinfo',
  data: {
    email: '',
    username: '',
    password: '',
  },
  methods:{
    register: function (message){
      alert(message)
    }
  }
})

new Vue ({
  el: '#usercheck',
  data: {
    uname: 'Rosa',
    pw: '12345',
    usercheck: '',
    passcheck: ''
  },
  methods:{
    login: function(event) {
      if (event) {
        alert('Logged in')
      }
      else {
        alert('Username / Password Incorrect')
      }
    }
  }
})

