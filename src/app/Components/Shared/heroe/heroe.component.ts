import { Component, OnInit } from '@angular/core';

// para tomar el parametro de la url se importa ActivatedRoute de routes
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  hero: any = {};
  pathMarvel = 'assets/images/marvel-comics-logo.jpg';
  pathDc = 'assets/images/logo_dc_comics.jpg';
  constructor(private actRoute: ActivatedRoute, private _heroesService: HeroesService) {
    // esto es un evento al cual se debe suscribir
    this.actRoute.params.subscribe(parametros => {
      console.log(parametros);
      this.hero = this._heroesService.getHeroe(parametros.id);
    });
  }

  ngOnInit() {
    console.log(this.hero);
  }
  getLogoHome() {
    return this.hero.casa == 'Marvel' ? this.pathMarvel : this.pathDc;
  }

}
