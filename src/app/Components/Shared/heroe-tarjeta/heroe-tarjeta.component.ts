import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = []; // este decorador toma la variable desde afuera enviada en []
  @Input() index: number;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  verHeroe() {
    this.router.navigate(['/heroe', this.index ]);
  }

}
