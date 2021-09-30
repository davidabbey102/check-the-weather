var searchBtn = $(".btn")
var APIKey = "71965dc096003a4b32ca2536c3f780b3"
var city



function getWeather() {
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

    fetch(requestUrl)
        .then(function(response) {
            console.log(response)
            return response.json()
        })
        .then(function(data) {
            for (i = 0; i < data.length; i++) {

            }
        })
}






searchBtn.on('click', getWeather)