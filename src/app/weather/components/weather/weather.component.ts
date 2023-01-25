import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cityName: string = '####';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {
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
