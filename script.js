/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let searchButton = document.querySelector("#search")
let URL = `https://api.giphy.com/v1/gifs/search?api_key=2a70b934652d4a2dbc908bd10c30b54d&q=`

searchButton.addEventListener("click", getGif)

async function getGif(){
  console.log('I work')
  let searchTerm = "cat"
  let response = await fetch(URL+searchTerm)
  console.log(response)
  let gifs = await response.json()
  console.log(gifs)
  
}