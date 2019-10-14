import { Injectable } from '@angular/core';
import { SampleData } from '../Model/sample-data';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  apiURL: string;

  constructor(private httpClient: HttpClient, private platformLocation: PlatformLocation) {
    this.apiURL = (this.platformLocation as any).location.origin + '/api';
    console.log((this.platformLocation as any).location);
    console.log((this.platformLocation as any).location.href);
    console.log((this.platformLocation as any).location.origin);
  }

  getSampleData() {
    return this.httpClient.get<SampleData[]>(`${this.apiURL}/SampleData`, {
      headers: { 'header1': 'value1', 'header2': 'value2' }
    });
  }
}
