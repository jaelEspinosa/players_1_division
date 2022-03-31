import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlayersDetailComponent } from './pages/players-detail/players-detail.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { PlayercardComponent } from './pages/players-detail/componets/playercard/playercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PlayersComponent,
    PlayersDetailComponent,
    NavigatorComponent,
    PlayercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
