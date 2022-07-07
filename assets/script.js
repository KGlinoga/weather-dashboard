// input form for users to search for a city
    // saving searches to local storage
    // appending searches in local storage to individual buttons
    //event listener for button clicks that search the app for that city
var cityInput = document.querySelector('input[name="city-input"]');
var searchBtn = document.querySelector("#search-city");
var searchHist = localStorage.getItem("searchedCity");
var userInput = cityInput.value;
var searchList = document.querySelector("#search-list");

searchBtn.addEventListener("click", function() {
    localStorage.setItem("searchedCity", cityInput.value);
    console.log(cityInput.value);
    newCity();
});

// function to create a button for each searched city:

function newCity() { 
    var newCityBtn;
    var cityBtn = document.createElement("button");
    var searchVal = searchHist.value;
    cityBtn.textContent = searchVal;
    searchList.appendChild(cityBtn);
    console.log(searchVal);
}

// section1 card:
    //h2 that updates with CURRENT CITY AND CURRENT DATE
    // p tags that update with that city's current Temp, Wind, Humidity, and UVI
        // p tag that displays the UVI value's background color updates depending on the UVI severity (if statements) 


        
// Section2:
    //5 cards that fill in each day's forecast in abovementioned City, starting the day AFTER Current Day
        //dynamically updated forecast includes: 
            // Date of forecast
            // weather icon
            // temp
            // wind
            // humidity

