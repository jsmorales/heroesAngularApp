import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private dataHeroes: any[] = [
    {
      id: 1,
      nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/images/aquaman.jpg',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      id: 2,
      nombre: 'Batman',
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/images/batman.jpg',
      aparicion: '1939-05-01',
      casa: 'DC'
    },
    {
      id: 3,
      nombre: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/images/daredevil.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      id: 4,
      nombre: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/images/hulk.jpg',
      aparicion: '1962-05-01',
      casa: 'Marvel'
    },
    {
      id: 5,
      nombre: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/images/linternaverde.jpg',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      id: 6,
      nombre: 'Spider-Man',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/images/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      id: 7,
      nombre: 'Wolverine',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/images/wolverine.jpg',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    },
    {
      id: 8,
      nombre: 'Capitán América',
      bio: 'El Capitán América viste un traje que lleva un motivo de la bandera de los Estados Unidos, y está armado con un escudo (compuesto de una aleación de un metal Extraterrestre "Adamantium" y de Vibranium que se encuentra en continente Africano y más específicamente en el país de Wakanda) indestructible el cual arroja a sus enemigos. El personaje es generalmente representado como el álter ego de Steve Rogers, un joven frágil mejorado a la cima de la perfección humana por un suero experimental para ayudar a los esfuerzos inminentes del gobierno de Estados Unidos en la Segunda Guerra Mundial. Cerca del final de la guerra, él queda atrapado en el hielo y sobrevive en animación suspendida hasta que es revivido en el presente. A pesar de que el Capitán América a menudo lucha por mantener sus ideales como un hombre fuera de su tiempo con sus realidades modernas, él sigue siendo una figura muy respetada en su comunidad, incluyendo el convertirse en el líder de los Vengadores durante mucho tiempo.',
      img: 'assets/images/captainamerica.png',
      aparicion: '1941-03-01',
      casa: 'Marvel'
    },
    {
      id: 9,
      nombre: 'Superman',
      bio: 'Superman (cuyo nombre kryptoniano es Kal-El y su nombre terrestre es Clark Kent) es un personaje ficticio, un superhéroe de los cómics que aparece en las publicaciones de DC Comics.​ Creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio; lo vendieron a Detective Comics, Inc. en 1938 por 130  dólares estadounidenses5​ y la primera aventura del personaje fue publicada en Action Comics #1 (junio de 1938), para luego aparecer en varios seriales de radio, programas de televisión, películas, tiras periódicas y videojuegos. Con el éxito de sus aventuras, Superman ayudó a crear el género del superhéroe y estableció su primacía dentro del cómic estadounidense.​ La apariencia del personaje es distintiva e icónica: un traje azul y rojo, con una capa y un escudo de “S” estilizado en su pecho,​ escudo que se ha convertido en un símbolo del personaje en todo tipo de medios de comunicación.​',
      img: 'assets/images/superman.png',
      aparicion: '1938-06-01',
      casa: 'DC'
    }
  ];

  constructor() {
    console.log('servicio heroes listo para funcionar!');
  }
  getHeroes() {
    return this.dataHeroes;
  }
  getHeroe(idHeroe: number) {
    return this.dataHeroes[idHeroe];
  }
  searchHeroes(valor: string) {
    return this.dataHeroes.filter( heroe => heroe.nombre.toLowerCase().includes(valor));
  }
}
