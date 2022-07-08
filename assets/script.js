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
 getApi();
// function to create a button for each searched city:

function newCity() { 
    var newCityBtn;
    var cityBtn = document.createElement("button");
    var searchVal = searchHist.value;
    cityBtn.textContent = searchHist;
    searchList.appendChild(cityBtn);
}

// section1 card:
    //h2 that updates with CURRENT CITY AND CURRENT DATE
    
    
    
    var currentDateDisplay = document.querySelector("#current-date");
    var currentDate = moment().format("MMMM DD, YYYY");
    currentDateDisplay.textContent = currentDate;
    
    function getApi() {
        var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=2bd5559124f13def23addea6864b8f2c';
        
        fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
            
        var currentCity = document.querySelector("#current-city");
        currentCity.textContent = "Current City: " + data.timezone;
        
        var currentTemp = document.querySelector("#current-temp");
        currentTemp.textContent = "Current Temp: " + data.current.temp;

        var currentWind = document.querySelector("#current-wind");
        currentWind.textContent = "Current Wind Speed: " + data.current.wind_speed+ " miles per hour";
        
        var currentHumid = document.querySelector("#current-humidity");
        currentHumid.textContent = "Current Humidity: " + data.current.humidity + "%";

        var currentUvi = document.querySelector("#current-uvi");
        currentUvi.textContent = "Current UV Index: " + data.current.uvi;
    });
}


//The below codeblock was my attempt at color-coding the UVI background based on the index severity. It's currently a "nice to have" as I believe my MVP is mostly based on utilizing API's, and this seems like a conditional statement/formatting. 

        // var index = data.current.uvi;
        // var uviColor;
        // function UVI() {
        //     if (index <=2){
        //        currentUvi.setAttribute("style:background", green);       
        //     }
        // }
        // UVI();

//end UVI color-coding attempt. -KG         

// Section2:
    //5 cards that fill in each day's forecast in abovementioned City, starting the day AFTER Current Day
        //dynamically updated forecast includes: 
            // Date of forecast
            // weather icon
            // temp
            // wind
            // humidity

