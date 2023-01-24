import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  location: string = '';

  constructor(private http: HttpClient) {
    navigator.geolocation.getCurrentPosition(this.success);
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }

  getUserLocation() {
    return this.location;
  }

  private success = async (position: any) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let locality = await this.getUser(latitude, longitude);
    this.initCity(locality);
  };

  private async getUser(latitude: number, longitude: number) {
    let url =
      'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' +
      latitude +
      '.42159&longitude=' +
      longitude +
      '.0837&localityLanguage=en';
    let response = await fetch(url);
    let userData = await response.json();
    return userData.city; // nas linhas de return não é necessário usar await
  }

  private initCity(locality: string) {
    this.location = locality;
  }
}
