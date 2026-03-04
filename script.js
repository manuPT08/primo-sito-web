let number = 15
let number2 = 30
let number3  = 16
console.log(number2)
let burger = document.querySelector(".burger-menu")

let nav = document.querySelector('.main-nav')
burger.addEventListener("click", function(){
   burger.classList.toggle('active')

   nav.classList.toggle("active")
})
