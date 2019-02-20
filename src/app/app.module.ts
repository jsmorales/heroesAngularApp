import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import {AppRouting} from './app.routes';
// Services
import {HeroesService } from './services/heroes.service';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { HomeComponent } from './Components/Shared/home/home.component';
import { AboutComponent } from './Components/Shared/about/about.component';
import { HeroesComponent } from './Components/Shared/heroes/heroes.component';
import { HeroeComponent } from './Components/Shared/heroe/heroe.component';
import { SearchheroesComponent } from './Components/Shared/searchheroes/searchheroes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchheroesComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
