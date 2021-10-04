var searchBtn = $(".search-btn")
var APIKey = "71965dc096003a4b32ca2536c3f780b3"
var city
var oldCities = document.querySelector(".old-cities")
var temperature = document.querySelector("#heading")
var humid = document.querySelector("#humidity")
var conditions = document.querySelector(".conditions")
var wind = document.querySelector("#wind")
var index = document.querySelector("#index")
var searchAgain = document.querySelector(".searchAgain")

function getWeather(city) {
    //first search by city name result receives less data but provides lat and long for second search
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial"
    savePastSearches()
    console.log(city) 
    fetch(requestUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            
            lati = data.coord.lat
            long = data.coord.lon            
       
            //second search uses lat and long data to receive a more detained current and forecast info block, used to populate weather cards
       var newUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lati + "&lon=" + long + "&exclude=minutely,hourly,alerts&appid=" + APIKey + "&units=imperial"

       fetch(newUrl)
       .then(function(response2) {
           return response2.json()
       })
       .then(function(data2) {
           console.log(data2)
           //Curent weather info
           temperature.textContent = data2.current.temp + "° F"
            conditions.textContent = data2.current.weather[0].description
            wind.textContent = data2.current.wind_speed + " MPH"
            humid.textContent = data2.current.humidity + "%"
            index.textContent = data2.current.uvi
            uviLevel = data2.current.uvi
            var currentIcon = data2.current.weather[0].icon
            var  iconUrl = "http://openweathermap.org/img/w/" + currentIcon + ".png"
            $("#current-icon").attr("src", iconUrl)

            //change UVI color
            if (uviLevel < 3) {
                index.style.backgroundColor = "green"
            } else if (uviLevel >= 3 && uviLevel < 5) {
                index.style.backgroundColor = "yellow"
                index.style.color = "black"
            } else if (uviLevel >= 6 && uviLevel < 7) {
                index.style.backgroundColor = "orange"
            } else if (uviLevel >= 8) {
                index.style.backgroundColor = "red"
            }

            //5-day forecast cards
            //Icon
            var  iconUrl1 = "http://openweathermap.org/img/w/" + data2.daily[0].weather[0].icon + ".png"
            $("#daily-icon1").attr("src", iconUrl1)
            var  iconUrl2 = "http://openweathermap.org/img/w/" + data2.daily[1].weather[0].icon + ".png"
            $("#daily-icon2").attr("src", iconUrl2)
            var  iconUrl3 = "http://openweathermap.org/img/w/" + data2.daily[2].weather[0].icon + ".png"
            $("#daily-icon3").attr("src", iconUrl3)
            var  iconUrl4 = "http://openweathermap.org/img/w/" + data2.daily[3].weather[0].icon + ".png"
            $("#daily-icon4").attr("src", iconUrl4)
            var  iconUrl5 = "http://openweathermap.org/img/w/" + data2.daily[4].weather[0].icon + ".png"
            $("#daily-icon5").attr("src", iconUrl5)
            console.log(data2.daily[0].weather[0].icon)

            //5 day temp
            $("#temp1").text("Temp: " + data2.daily[0].temp.day + "° F")
            $("#temp2").text("Temp: " + data2.daily[1].temp.day + "° F")
            $("#temp3").text("Temp: " + data2.daily[2].temp.day + "° F")
            $("#temp4").text("Temp: " + data2.daily[3].temp.day + "° F")
            $("#temp5").text("Temp: " + data2.daily[4].temp.day + "° F")

            //5 day wind
            $("#wind1").text("Wind: " + data2.daily[0].wind_speed + " MPH")
            $("#wind2").text("Wind: " + data2.daily[1].wind_speed + " MPH")
            $("#wind3").text("Wind: " + data2.daily[2].wind_speed + " MPH")
            $("#wind4").text("Wind: " + data2.daily[3].wind_speed + " MPH")
            $("#wind5").text("Wind: " + data2.daily[4].wind_speed + " MPH")

            //5 day humidity
            $("#humid1").text("Humidity: " + data2.daily[0].humidity + "%")
            $("#humid2").text("Humidity: " + data2.daily[1].humidity + "%")
            $("#humid3").text("Humidity: " + data2.daily[2].humidity + "%")
            $("#humid4").text("Humidity: " + data2.daily[3].humidity + "%")
            $("#humid5").text("Humidity: " + data2.daily[4].humidity + "%")
       })
   })
   
   $(".city-header").text(city + " (" + moment().format("L") + ")")
   $(".time-header").text(moment().format("hh:mm"))
   $("#date1").text(moment().add(1, "day").format("L"))
   $("#date2").text(moment().add(2, "day").format("L"))
   $("#date3").text(moment().add(3, "day").format("L"))
   $("#date4").text(moment().add(4, "day").format("L"))
   $("#date5").text(moment().add(5, "day").format("L"))
   $(".container-fluid").show()
}

//Displays past searches and add new ones to the list while also filtering repeats out of the stored array of cities, unfortunately misspelled cities get saved too
function showPastSearches() {
    oldCities.innerHTML = ""
    var pastCities = JSON.parse(localStorage.getItem("pastSearches"))
    var filteredCities = [...new Set(pastCities)]

    for (var i = 0; i < filteredCities.length; i++) {
        var cityList = filteredCities[i]
        var newInput = document.createElement("input")
            newInput.setAttribute('tpye', 'text')
            newInput.setAttribute('readonly', true)
            newInput.setAttribute('value', cityList)
            oldCities.append(newInput)
            newInput.addEventListener('click', function(event) {
                city = (event.target).value
                getWeather(city)
            }) 
            localStorage.setItem("pastSearches", JSON.stringify(filteredCities))
    }
}

//Saves searches to local runs show to update list
function savePastSearches() {
    var oldSearches = JSON.parse(localStorage.getItem("pastSearches"))
    var toCapitalize = $("#form1").val()
    var capitalized = toCapitalize.charAt(0).toUpperCase() + toCapitalize.slice(1)
 
    if (oldSearches == null) {        
        oldSearches = capitalized
        localStorage.setItem("pastSearches", JSON.stringify([oldSearches]))        
    } else 
    if (oldSearches !== null) {
        oldSearches.push(capitalized)
        localStorage.setItem("pastSearches", JSON.stringify(oldSearches))
    }
    showPastSearches()
}

$(".container-fluid").hide()
showPastSearches()

//Search Button input search
searchBtn.on('click', function() {
    getWeather($("#form1").val())
})