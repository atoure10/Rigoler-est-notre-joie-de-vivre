let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

function sendApiRequest(){
  let response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY_GOES_HERE&q=Ryan+Gosling&limit=25&offset=0&rating=G&lang=en`)
}

