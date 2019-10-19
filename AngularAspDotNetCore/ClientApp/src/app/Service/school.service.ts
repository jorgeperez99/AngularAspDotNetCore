import { Injectable } from '@angular/core';
import { School } from '../Model/school';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  apiURL: string = 'https://localhost:5001/api';

  constructor(private httpClient: HttpClient) { }

  getSchools() {
    return this.httpClient.get<School[]>(`${this.apiURL}/school`);
  }
}
