import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../../Service/sample-data.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  constructor(private sampleDataService: SampleDataService) { }

  ngOnInit() {
  }

  getData() {
      debugger;
    this.sampleDataService.getPhones().subscribe(data => {
      debugger;
      console.debug(data);
    });  
  }

}
