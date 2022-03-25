import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktailsList = Array<Cocktail>();

  constructor() {
    this.cocktailsList = [{
      nom: 'Mojito',
      img:
      'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description: 'Mojito description'
      },{
        nom: 'Cosmopolitan',
        img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px',description:'Cosmopolitan description'
        },{nom: 'Mai Tai',
        img:'https://www.hangoverweekends.co.uk/media/15506/mm-cocktailguide-maitai-590x375.jpg?width=434px&height=276px',
        description:'Mai Tai description',}];
  }

  ngOnInit(): void {
  }

}
