import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  theme = 'dark';
  srcImage = '../../../assets/images/A-64.png';
  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
  }
  buscarHeroes(value: string) {
    console.log('Buscando a: ' + value);
    // console.log(this._heroesService.searchHeroes(value));
    this.router.navigate(['/searchheroe', value ]);
  }

}
