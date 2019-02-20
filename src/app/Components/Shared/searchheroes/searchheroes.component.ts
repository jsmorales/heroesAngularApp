import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-searchheroes',
  templateUrl: './searchheroes.component.html'
})
export class SearchheroesComponent implements OnInit {
  heroes: any = [];
  constructor(private actRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) {
    // esto es un evento al cual se debe suscribir para tomar los parametros de la url
    this.actRoute.params.subscribe(parametros => {
      console.log(parametros);
      this.heroes = this._heroesService.searchHeroes(parametros.value);
    });
  }

  ngOnInit() {
  }
  verHeroe(idHeroe: number) {
    console.log('Quieres ver el heroe ' + idHeroe);
    this.router.navigate(['/heroe', idHeroe]);
  }

}
