/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


let button = document.querySelector("#click")
let key = "2a70b934652d4a2dbc908bd10c30b54d"
let image = document.querySelector("#gif")
let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=`

button.addEventListener("click", async ()=>{
  let searchTerm = document.querySelector("#search").value
  let response = await fetch(url + searchTerm)
  let gifs = await response.json()
  console.log(gifs)
  image.src = gifs.data[0].images.original.url
})