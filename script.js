/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", getGif)

function getGif(){
  console.log('I work')
}