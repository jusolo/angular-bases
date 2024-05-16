import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.model';
import { DbzModule } from './dbz/dbz.module';
import { HerosModule } from './heroes/heros.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    DbzModule,
    HerosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
