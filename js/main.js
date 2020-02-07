console.log("Currency Javascript Loaded");


// $('.btn').click(function() {
//     $('.item').addClass('showitems');    
//   });

console.log('is this working at all');

fetch("./currency.json")
  .then(response => response.json())
  .then(data => {
    console.log("Got the data!");
    console.log(data);
    // TODO: Call a function to do something with this data.

    let num = 0;
    for (var key in data.rates) {
      if(num++ < 10){
        let percentageTextElement = document.querySelectorAll("span")[num-1];
        let infoElement = document.getElementsByClassName("item" + (num))[0];
        let barHeightElement = document.getElementsByClassName("height" + (num))[0];
        let percentage = (data.rates[key] / 400) * 100;
        console.log("percentage: "+ percentage);
        // let currencyValue = data.rates[key];
        // console.log("currencyValue: " + currencyValue);
        // let elementWidth = currencyValue / 2;
        // console.log("elementWidth: " + elementWidth);
        
        barHeightElement.style.height = percentage + "%";
        infoElement.innerHTML = key;
        percentageTextElement.innerHTML = percentage.toFixed(2) + "%";
      }
    }
    
    
    for(let i = 0; i < 5; i++){
      
    }
  });

/*

*/

