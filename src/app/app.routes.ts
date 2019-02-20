import { RouterModule, Routes } from '@angular/router';

// se importan los componentes
import { HomeComponent } from './Components/Shared/home/home.component';
import { AboutComponent } from './Components/Shared/about/about.component';
import { HeroesComponent } from './Components/Shared/heroes/heroes.component';
import { HeroeComponent } from './Components/Shared/heroe/heroe.component';
import {SearchheroesComponent} from './Components/Shared/searchheroes/searchheroes.component';

const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'searchheroe/:value', component: SearchheroesComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const AppRouting = RouterModule.forRoot(AppRoutes, {useHash: false}); // se usa hash para poder trabajar mejor los parametros
