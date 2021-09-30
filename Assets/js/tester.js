



var formInput = $('form-control')

function showPastSearches() {
    var pastCities = JSON.parse(localStorage.getItem("pastSearches"))
    console.log(pastCities)

    for (var i = 0; i < pastCities.length; i++) {
        var li = document.createElement("li")
        var cityList = cityList[i]
        console.log(cityList)
        li.textContent = cityList
        listGroup.appendChild(li)
    } 
}

function savePastSearches() {
    var oldSearches = JSON.parse(localStorage.getItem("pastSearches"))
    console.log(oldSearches)
    if (oldSearches == null) {
        oldSearches = formInput.value
        localStorage.setItem("pastSearches", JSON.stringify([oldSearches]))        
    } else 
    if (oldSearches !== null) {
        oldSearches.push(formInput.value)
        localStorage.setItem("saveHighScores", JSON.stringify(oldSearches))
    }
    showPastSearches()
}

