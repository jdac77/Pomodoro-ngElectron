import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TimerComponent } from './components/timer/timer.component';
import { CounterService } from './services/counter.service';
import { FormatTimePipe } from './helpers/pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabBarComponent,
    TimerComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
