import { Injectable } from '@angular/core';
import { SampleData } from '../Model/sample-data';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  apiURL: string = 'http://localhost:8010/angularexample-dda6c/us-central1/webApi/api/v1';

  constructor(private httpClient: HttpClient) { }

  getPhones() {
    return this.httpClient.get<SampleData[]>(`${this.apiURL}/phones`);
  }

  getPhone() {
    return this.httpClient.get<SampleData[]>(`${this.apiURL}/phone`);
  }
}
