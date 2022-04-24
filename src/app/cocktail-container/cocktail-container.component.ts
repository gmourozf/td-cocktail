import { Component, OnInit } from '@angular/core';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { Cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {
  public cocktailsData : Cocktail[]= [{
    nom: 'Mojito',
    img:
    'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
    description: 'Mojito description'
    },{
      nom: 'Cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px',description:'Cosmopolitan description'
      },{nom: 'Mai Tai',
      img:'https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px',
      
      description:'Mai Tai description',}];
      //valeur du cocktail que le composant cocktailDetail va afficher par defaut au chargement de l'application
      public selectedCocktail! : Cocktail;

  constructor() { }

  ngOnInit(): void {
    //on charge le premier composant de la liste au démarrage de l'application pour le transmettre  au composant cocktailDetails
    this.selectedCocktail = this.cocktailsData[0]
  }

  public selectCocktail(index:number): void {
    this.selectedCocktail = this.cocktailsData[index];
  }

}
