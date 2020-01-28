console.log("Currency Javascript Loaded");


// $('.btn').click(function() {
//     $('.item').addClass('showitems');    
//   });

//console.log("domain length: " + data.length);

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


// Connect to dataprovider api

// Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://api.dataprovider.com/datasets/statistics.json?api_key=, true)

// request.onload = function() {
//   // Begin accessing JSON data here
//   console.log()  
// }

// // Send request
// request.send()


// Create a new XMLHttpRequest Object 
// var xmlhttp = new XMLHttpRequest();
// // Define the api url
// var url = "https://api.dataprovider.com/datasets/statistics.json?api_key=5dc71b45f5f51c00d2e71af30cfb14702de4ca8e0803f7460625e9a1ad605609&id=15657&fields[]=tld";

// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(this.responseText);
//         processData(data);
//     }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function processData(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         // out += '<a href="' + arr[i].url + '">' +
//         // arr[i].display + '</a><br>';
//     }
//     document.getElementById("id01").innerHTML = out;
// }


// Create the XHR object.
// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//       // XHR for Chrome/Firefox/Opera/Safari.
//       xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//       // XDomainRequest for IE.
//       xhr = new XDomainRequest();
//       xhr.open(method, url);
//     } else {
//       // CORS not supported.
//       xhr = null;
//     }
//     return xhr;
//   }
  
//   // Helper method to parse the title tag from the response.
//   function getTitle(text) {
//     return text.match('<title>(.*)?</title>')[1];
//   }
  
//   // Make the actual CORS request.
//   function makeCorsRequest() {
//     // This is a sample server that supports CORS.
//     var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
  
//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//       alert('CORS not supported');
//       return;
//     }
  
//     // Response handlers.
//     xhr.onload = function() {
//       var text = xhr.responseText;
//       var title = getTitle(text);
//       alert('Response from CORS request to ' + url + ': ' + title);
//     };
  
//     xhr.onerror = function() {
//       alert('Woops, there was an error making the request.');
//     };
  
//     xhr.send();
//   }


// async function makeAPICall(){
//     var request = new Request('https://domainscope.com/api/v2.1/keywords/popularity/top?&num_samples=10');
//     fetch(request, {mode: 'cors'});
//     //const response = await fetch('');
//     //const myJson = await response.json(); //extract JSON from the http response
// }

// sendRequest(url, method, body) {
//     const options = {
//         method: method,
//         headers: new Headers({'content-type': 'application/json'}),
//         mode: 'no-cors'
//     };

//     options.body = JSON.stringify(body);

//     return fetch(url, options);
// }

// makeAPICall();


// fetch('https://domainscope.com/api/v2.1/keywords/popularity/top?&num_samples=10', {
//   method: 'GET', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//     'X-DOMAINSCOPE-APIKEY': '329c96468a19f61258526dc0d37c9eb2'
//   },
//   mode: 'no-cors'
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });