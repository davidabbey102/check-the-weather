
// function getWeather() {
//     city = $("#form1").val() 
//     var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial"
//     savePastSearches() 
//     fetch(requestUrl)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             console.log(data)
//              lati = data.coord.lat
//              long = data.coord.lon            
        

//         var newUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lati + "&lon=" + long + "&exclude=minutely,hourly,alerts&appid=" + APIKey + "&units=imperial"

//         fetch(newUrl)
//         .then(function(response2) {
//             return response2.json()
//         })
//         .then(function(data2) {
//             console.log(data2)
//         })
//     })




// function showPastSearches() {
//     var listGroup = $(".list-group")
//     var pastCities = JSON.parse(localStorage.getItem("pastSearches"))
//     console.log(pastCities)
    

//     for (var i = 0; i < pastCities.length; i++) {
//         var li = document.createElement("li")
//         var cityList = pastCities[i]
//         console.log(cityList)
//         li.textContent = cityList
//         listGroup.appendChild(li)
//     } 
// }

// function savePastSearches() {
//     var oldSearches = JSON.parse(localStorage.getItem("pastSearches"))
//     console.log(oldSearches)
//     if (oldSearches == null) {
//         oldSearches = $("#form1")
//         localStorage.setItem("pastSearches", JSON.stringify([oldSearches]))        
//     } else 
//     if (oldSearches !== null) {
//         oldSearches.push(formInput.value)
//         localStorage.setItem("pastSearches", JSON.stringify(oldSearches))
//     }
//     showPastSearches()
// }


// //pulled from codegrepper
// function uniqueArray2(arr) {
//     var a = [];
//     for (var i=0, l=arr.length; i<l; i++)
//         if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
//             a.push(arr[i]);
//     return a;
// }

// //pulled from stackoverflow
// function unique(arr) {
//     var i,
//         len = arr.length,
//         out = [],
//         obj = { };
    
//     for (i = 0; i < len; i++) {
//         obj[arr[i]] = 0;
//     }
//     for (i in obj) {
//         out.push(i);
//     }
//     return out;
//     };





//     // https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js
