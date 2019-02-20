import { Component, OnInit } from '@angular/core';

// importacion de un service
import {HeroesService } from '../../../services/heroes.service';

// para navegar por las rutas desde aca se necesita importar el router
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor( private _heroesService: HeroesService, private router: Router) { // --> se instancia el enrutador

  }
  ngOnInit() {

    // al iniciar la instancia del service se pueden usar los metodos asi:
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idHeroe: number) {
    console.log('Quieres ver el heroe ' + idHeroe);
    this.router.navigate(['/heroe', idHeroe]);
  }

}
