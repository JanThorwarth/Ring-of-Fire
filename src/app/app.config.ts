import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
