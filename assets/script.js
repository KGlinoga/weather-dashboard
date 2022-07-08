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
    cityBtn.textContent = searchHist;
    searchList.appendChild(cityBtn);
}

// section1 card:
    //h2 that updates with CURRENT CITY AND CURRENT DATE
    // var tableBody = document.getElementById('repo-table');
    // var fetchButton = document.getElementById('fetch-button');
    var currentCity = document.getElementById("#current-city");
    // *Just remember this exists - 
    // var searchBtn = document.querySelector("#search-city");


    function getApi() {
      // fetch request gets a list of all the repos for the node.js organization
      var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=2bd5559124f13def23addea6864b8f2c';
    
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
          // Creating elements, tablerow, tabledata, and anchor - this is more like .textContent b/c we did the HTML already.
        //     var createTableRow = document.createElement('tr');
        // var currentDate = moment().format("MM DD, YYYY")
        var currentTemp = document.querySelector("#current-temp");
        currentTemp.textContent = "Current Temp: " + data.current.temp;
        //     var tableData = document.createElement('td');
        //     var link = document.createElement('a');
    
        //     // Setting the text of link and the href of the link
        //     link.textContent = data[i].html_url;
        //     link.href = data[i].html_url;
    
        //     // Appending the link to the tabledata and then appending the tabledata to the tablerow
        //     // The tablerow then gets appended to the tablebody
        //     tableData.appendChild(link);
        //     createTableRow.appendChild(tableData);
        //     tableBody.appendChild(createTableRow);
          });
    //     });
    }
      getApi();
    // fetchButton.addEventListener('click', getApi);


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

