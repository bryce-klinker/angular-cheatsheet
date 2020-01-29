import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createAppModuleClass } from './app/app.module';
import { environment } from './environments/environment';

import defaultSettings from './settings.json';

async function bootstrap() {
  let settings = defaultSettings;
  if (environment.production) {
    enableProdMode();
    const response = await fetch('settings.json');
    settings = await response.json();
  }

  platformBrowserDynamic()
    .bootstrapModule(createAppModuleClass(settings))
    .catch(err => console.error(err));
}

bootstrap();
