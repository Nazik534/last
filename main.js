// Знаходимо елемент за класом
let them = document.querySelector('.them');

them.addEventListener("click", mouserr );

let body = document.querySelector('body');

let main = document.querySelector('main')

let lodo = document.querySelector('.lodo')

let them2 = "white"
      console.log('hello')

   function  mouserr(){
      console.log('hello')
      if (them2 == "white"){
      main.style.background = 'rgba(45, 46, 65, 0.45)'
      lodo.src = "https://terraria.wiki.gg/images/thumb/d/d2/Site-logo-underground.png/181px-Site-logo-underground.png?55956c"
      body.style.backgroundImage = `url("https://terraria.wiki.gg/images/1/1b/Site-background-underground.jpg")`
      them2 = "black"
}
      else {
      main.style.background = 'rgba(164, 89, 15, 0.31)'
      lodo.src = "https://terraria.wiki.gg/images/9/99/Site-logo-overworld.png"
      body.style.backgroundImage = `url("https://terraria.wiki.gg/images/0/0e/Site-background-overworld.jpg")`
      them2 = "white"
      }
}
