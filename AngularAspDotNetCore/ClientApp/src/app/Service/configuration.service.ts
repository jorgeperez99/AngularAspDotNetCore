import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationSetting } from '../Model/ConfigurationSetting';
import { PlatformLocation } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  env = environment;

  constructor(private httpClient: HttpClient, private platformLocation: PlatformLocation) {
  }

  getConfigurationSettings() {
    return this.httpClient.get<ConfigurationSetting>(`${this.getApiUrl()}/Configuration`);
  }

  getBaseUrl() {
    debugger;
    if (this.env.production) {
      return (this.platformLocation as any).location.origin + "/" + this.env.applicationName;
    }
    else {
      return this.env.baseUrl;
    }
  }

  getApiUrl() {
    return this.getBaseUrl() + "/api";
  }
}
