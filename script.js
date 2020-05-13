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
  
  document.querySelector("#content").innerHTML +=
`<div id="card1" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data[0].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[0].punchline}</p>
    
  </div>
</div>`
 
  document.querySelector("#content").innerHTML +=
`<div id="card2" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[1].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[1].punchline}</p>
    
  </div>
</div>`

   document.querySelector("#content").innerHTML +=
`<div id="card3" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[2].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[2].punchline}</p>
    
  </div>
</div>`

 document.querySelector("#content").innerHTML +=
`<div id="card4" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[3].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[3].punchline}</p>
    
  </div>
</div>`
 
  document.querySelector("#content").innerHTML +=
`<div id="card5" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[4].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[4].punchline}</p>
    
  </div>
</div>`
  
   document.querySelector("#content").innerHTML +=
`<div id="card6" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[5].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[5].punchline}</p>
    
  </div>
</div>`
   
    document.querySelector("#content").innerHTML +=
`<div id="card7" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[6].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[6].punchline}</p>
    
  </div>
</div>`
    
     document.querySelector("#content").innerHTML +=
`<div id="card8" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[7].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[7].punchline}</p>
    
  </div>
</div>`
     
      document.querySelector("#content").innerHTML +=
`<div id="card9" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${data[8].setup}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Guess First...</h6>
    <p class="card-text">${data[8].punchline}</p>
    
  </div>
</div>`
}
  

  
  