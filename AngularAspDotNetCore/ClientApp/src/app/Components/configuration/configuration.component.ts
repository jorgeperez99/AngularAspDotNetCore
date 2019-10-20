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
  configurationSetting: ConfigurationSetting;
  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    debugger;
    this.configurationService.getConfigurationSettings().subscribe(configurationSetting => {
      this.configurationSetting = configurationSetting;
    });
  }
}
