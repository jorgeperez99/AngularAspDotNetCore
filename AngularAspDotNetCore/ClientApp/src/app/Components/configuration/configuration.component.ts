import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ConfigurationService } from '../../Service/configuration.service';
import { ConfigurationSetting } from '../../Model/ConfigurationSetting';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  env = environment;
  apiUrl: string;
  baseUrl: string;
  configuration: string;
  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.apiUrl = this.configurationService.getApiUrl();
    this.baseUrl = this.configurationService.getBaseUrl();
  }

  getConfiguration() {
    this.configurationService.getConfigurationSettings().subscribe(configurationSetting => {
      debugger;
      this.configuration = configurationSetting.configurationType;
    });
  }
}
