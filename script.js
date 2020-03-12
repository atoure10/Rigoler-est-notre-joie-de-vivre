let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

function sendApiRequest(){
  let response = fetch(``)
}

