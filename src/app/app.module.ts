import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';

import { AppComponent } from './app.component';
import {CatalogModule} from './catalog/catalog.module';
import {ServicesModule} from './core/services/services.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {WidgetsModule} from './core/widgets/widgets.module';
import {CartModule} from './cart/cart.module';

registerLocaleData(localeMX);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Feature Modules
    CatalogModule,

    // Widgets
    BrowserModule,
    WidgetsModule,
    // Services
    ServicesModule,
    HttpClientModule,
    // Routing module à la fin
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
