let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

async function sendApiRequest(){
  let response = await fetch(``)
}

