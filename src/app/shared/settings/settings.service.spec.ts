import {SettingsService} from './settings.service';

describe('SettingsService', () => {
  it('should return current settings', () => {
    const service = new SettingsService({apiUrl: 'bob'});

    expect(service.settings.apiUrl).toEqual('bob');
  });
});
