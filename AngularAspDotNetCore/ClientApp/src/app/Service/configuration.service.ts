import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationSetting } from '../Model/ConfigurationSetting';
import { PlatformLocation } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  apiURL: string = 'https://localhost:5001/api';
  env = environment;

  constructor(private httpClient: HttpClient, private platformLocation: PlatformLocation) {
    this.apiURL = (this.platformLocation as any).location.origin + "/" +
      ((this.env.applicationName) ? this.env.applicationName + "/api": "api") ;
  }

  getConfigurationSettings() {
    return this.httpClient.get<ConfigurationSetting>(`${this.apiURL}/Configuration`);
  }
}
