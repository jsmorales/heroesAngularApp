import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = []; // este decorador toma la variable desde afuera enviada en []
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>; // ocupa Output y EventEmmiter, <number> especifica que emite un numero
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter(); // se inicializa el emisor del evento
  }
  ngOnInit() {
  }
  verHeroe() {
    // this.router.navigate(['/heroe', this.index ]);
    this.heroeSeleccionado.emit(this.index); // se emite el evento enviando el number que se especifica en la declaracion
  }

}
