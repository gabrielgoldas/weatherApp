import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { Weather } from './models/weather.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
  weatherData?: Weather
  city: string = '';
  iconWeather?: string
  errorMessage: string = '';
  faSearch = faSearch;
  faDroplet = faDroplet;
  faWind = faWind;

  constructor(private weatherService: WeatherService) { }

  fetchCurrentWeather(cityInput: HTMLInputElement) {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.fetchCurrentWeatherIcon();
        this.errorMessage = ''
        this.city = ''
        cityInput.focus()
      },
      (error) => {
        if (error.status === 404) {
          this.weatherData = undefined
          this.errorMessage = 'Cidade não encontrada. Verifique e tente novamente.';
        } else {
          this.errorMessage = 'Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.';
        }

        this.city = ''
        cityInput.focus()
      }
    );
  }

  fetchCurrentWeatherIcon() {
    const icon = this.weatherData?.weather[0]?.icon
    if (!icon) {
      console.error('Erro ao buscar o ícone');
    } else {
      this.weatherService.getIconCurrentWeather(icon).subscribe(
        (iconUrl: string) => {
          this.iconWeather = iconUrl;
        },
        (error) => {
          console.error('Erro ao buscar o ícone', error);
        }
      )
    }
  }
}
