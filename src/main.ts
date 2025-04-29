import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// El orden de las librerias son importantes
import {defineCustomElements} from '@ionic/pwa-elements/loader'

defineCustomElements(window)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
