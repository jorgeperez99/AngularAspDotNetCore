import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
