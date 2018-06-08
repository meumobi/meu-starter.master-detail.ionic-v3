import { NgModule } from '@angular/core';

import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import { ImagecdnPipe } from '../pipes/imagecdn/imagecdn';


@NgModule({
  imports: [],
  declarations: [
    ImagecdnPipe
  ],
  providers: [
    MeuToastProvider,
    AnalyticsProvider
  ],
  exports: [
    ImagecdnPipe
  ]
})
export class SharedModule { }