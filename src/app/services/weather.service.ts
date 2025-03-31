import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Weather } from "../models/weather.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = environment.api
  private apiKey = environment.apiKey
  private baseUrlIcon = environment.baseUrlIcon

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string): Observable<Weather> {
    return this.httpClient.get<Weather>(`${this.baseUrl}q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`);
  }

  getIconCurrentWeather(icon: string): Observable<string> {
    const fullUrl = `${this.baseUrlIcon}${icon}.png`;
    return of(fullUrl);
  }
}