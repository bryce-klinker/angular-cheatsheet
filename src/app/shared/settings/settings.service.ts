import {Inject, Injectable, InjectionToken} from '@angular/core';
import {SettingsModel} from './settings.model';

export const SETTINGS_TOKEN = new InjectionToken('SETTINGS');

@Injectable()
export class SettingsService {
  get settings() {
    return this.settingsModel;
  }

  constructor(@Inject('SETTINGS') private settingsModel: SettingsModel) {

  }
}
