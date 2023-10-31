import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//引導啓動模塊
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
