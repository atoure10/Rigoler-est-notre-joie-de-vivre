let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
 
  let response = await fetch(`https://official-joke-api.appspot.com/random_ten`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  
  document.querySelector("#content").innerHTML =
`<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>`
document.querySelector("#content").innerHTML += data[0].setup
  document.querySelector("#content").innerHTML += data[0].punchline
  
  document.querySelector("#content").innerHTML += data[1].setup
  document.querySelector("#content").innerHTML += data[1].punchline
  
  document.querySelector("#content").innerHTML += data[2].setup
  document.querySelector("#content").innerHTML += data[2].punchline
  
  document.querySelector("#content").innerHTML += data[3].setup
  document.querySelector("#content").innerHTML += data[3].punchline
  
  document.querySelector("#content").innerHTML += data[4].setup
  document.querySelector("#content").innerHTML += data[4].punchline
  
  document.querySelector("#content").innerHTML += data[5].setup
  document.querySelector("#content").innerHTML += data[5].punchline
  
  document.querySelector("#content").innerHTML += data[6].setup
  document.querySelector("#content").innerHTML += data[6].punchline
  
  document.querySelector("#content").innerHTML += data[7].setup
  document.querySelector("#content").innerHTML += data[7].punchline
  
  document.querySelector("#content").innerHTML += data[8].setup
  document.querySelector("#content").innerHTML += data[8].punchline
}

