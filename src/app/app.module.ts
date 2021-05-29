import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { CalculetteComponent } from './calculette/calculette.component';
import { CalculetteService } from './service/calculette.service';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AppareilComponent,
    CalculetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalculetteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
