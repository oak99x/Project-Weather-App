import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  //user's current location---------------------------------------------------------------

  //location: string;

  // private success = async (position: any) => {
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longitude;

  //   let locality = await this.getUser(latitude, longitude);
  //   this.initCity(locality)
  // }

  // private async getUser(latitude: number, longitude: number) {
  //   let url =
  //     "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
  //     latitude +
  //     ".42159&longitude=" +
  //     longitude +
  //     ".0837&localityLanguage=en";
  //   let response = await fetch(url);
  //   let userData = await response.json();
  //   return userData.city; // nas linhas de return não é necessário usar await
  // }

  // private initCity(locality: string){
  //   this.location =  locality;
  // }

  //------------------------------------------------------------------------------------
  cityName: string = '####';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {
    //navigator.geolocation.getCurrentPosition(this.success);
    //this.location = this.getUserLocation();

    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getUserLocation() {
    return this.weatherService.getUserLocation();
  }

  private getWeatherData(cityName: string) {
    setTimeout(() => {
      if (cityName === '####') {
        cityName = this.getUserLocation();
      }

      console.log(cityName);

      this.weatherService.getWeatherData(cityName).subscribe({
        next: (response) => {
          this.weatherData = response;
        },
      });
    }, 500);
  }
}
