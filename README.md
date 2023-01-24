# Weather Forecast Project

This project is a web application to consult the weather forecast. It was developed using angular, TypeScript and two external APIs, the Openweather API and the Reversegeocoding API.

Openweather API, available on the fast platform, is used to seek climate data from a particular city. The user can enter the name of the city and the application will use this API to get information about the weather forecast.

The second API, Reversegeocoding API, available on the Big Data Cloud platform, is used to seek the current location of the user from the coordinates collected by the browser. So as soon as the project will be initialized on the screen the climate data from the current location of the user.

The combination of these two APIs allows the user to obtain the weather forecast of any city they want, the application interface has a minimalist and clean style, so easy to use and understand.

This project was developed from Sameer Saini's tutorial available on Youtube - [Open Weather API Tutorial](https://www.youtube.com/watch?v=psZXU8PTAS8)

## Functionalities
- Consult the weather forecast for a specific city.

## Requirements
To run this project, you will need to have installed:

- Node.js (https://nodejs.org/)
- Angular CLI (https://cli.angular.io/)
- Access keys for the OpenWeather API and ReverseGeocoding API (available at [OpenWeather API Doc](https://rapidapi.com/KirylBokiy/api/openweather43) e [ReverseGeocoding API Doc](https://www.bigdatacloud.com/docs/api/reverse-geocode-to-city-api))

## How to use
1. Browse to the project folder.
2. Run the `npm install` command to install the facilities.
3. Enter your access keys to APIs in  "src/environments/environment.ts" e "src/app/app.component.ts"
4. Run the `npm start` command to start the application

<br>

Runs the app in the development mode.\
Open  [http://localhost:4200/](http://localhost:4200/)  to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Used tools:
- TypeScript
- HTML
- CSS
- Angular

#### <a href="">Link to open the Weather App</a>

<br>

<p align="center">
  <img src="./src/imgs/captura.png" width="500px" alt="Weather App">
  <p align="center">Figure 1: Screenshot</p>
</p>
