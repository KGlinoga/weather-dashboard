# weather-dashboard
Challenge 6 - Weather Dashboard to showcase 3rd party API skills

Please find the app here: https://kglinoga.github.io/weather-dashboard/

This assignment was meant to showcase some proficiency in using 3rd party and server-side API's.  

I built this Weather Dashboard app to help travellers plan their visits to various cities, by displaying weather data for them based on the city they search for.  The app saves their city search history in local storage, and displays the search history in the form of buttons.  The city buttons, when clicked, should display the current weather data and 5-day forecast for that city. 

Although I was not able to achieve and connect all the funcitonality, I was able to deploy the following concepts: 
- a thorough wireframe (pictured below)
- practical and useful pseudo-code
- better pre-planning, like noting the necessary API parameters before coding and creating descriptive Id's during the initial HTML build, rather than during the JavaScript build 
- custom CSS styling for an appealing and intuitive UX
- a Search button that triggers the following two actions:
  - an input field that accepts and saves user input in local storage
  - appending a button, displaying local storage data as text on the button 
- using moment.js to display the current date
- formatting the current date to Month Day, Year format
- utilizing the server-side API OpenWeather, following their docs and pulling data from them
- displaying specific pieces of data
- displaying them dynamically via JavaScript

Due to time and knowledge constraints, I was unable to achieve the following functionality and connections: 
- city search data in local storage was not persistent through refreshing the page
- pulling lattitude and longitude data from searched cities
- updating the "Current City" card API data from the city search card
- color-coding the current UVI display based on the city's current UVI
- pulling and appending data from OpenWeather for the 5-day forecast cards

I am happy to hear any and all advice regarding any of these topics and more!

Despite not completing this assignment, I am quite pleased with how well using API's and displaying the data went.  There were also concepts around local storage, input forms, and appending elements that I struggled with greatly on past assignments, that I was able to achieve here, and I am quite proud of that!  

## Installation

There should be no additional steps required to install this project aside from visiting the above-mentioned link. 

## Usage

To use this app, follow the above link.  Then enter the city you're traveling to into the form marked "Search for a City." Click Search, and ideally, the Current City card would populate with API weather data for that city.  These cards are not linked in that way, so the Current City card displays information for Chicago.  We could change the city in the code using lattitude and longitude coordinates. 

![Screen Shot 2022-07-07 at 10 26 31 PM](https://user-images.githubusercontent.com/28368622/177923133-1312d9c4-dbf0-4841-8db1-9bebabc06aa9.png)
Weather Dashboard (completed to the best of my abilities)

![Screen Shot 2022-07-05 at 8 36 52 PM](https://user-images.githubusercontent.com/28368622/177462983-8f9da186-ee0b-4579-827d-00d80e551522.png)
Wireframe

## Credits

Weather Data came from Open Weather
  https://openweathermap.org/
  
Wireframing was done in Excalidraw
  http://excalidraw.com/

Current date from moment.js
  



