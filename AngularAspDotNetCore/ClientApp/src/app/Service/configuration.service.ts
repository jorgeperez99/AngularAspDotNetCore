import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationSetting } from '../Model/ConfigurationSetting';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  apiURL: string = 'https://localhost:5001/api';

  constructor(private httpClient: HttpClient) { }

  getConfigurationSettings() {
    return this.httpClient.get<ConfigurationSetting>(`${this.apiURL}/Configuration`);
  }
}
