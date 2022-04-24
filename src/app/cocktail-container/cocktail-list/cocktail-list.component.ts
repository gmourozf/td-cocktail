import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CocktailDetailsComponent } from '../cocktail-details/cocktail-details.component';
import { Cocktail } from '../../interfaces/cocktail';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktailsList:Array<Cocktail> = new Array<Cocktail>();
  @Output() clickCocktail: EventEmitter<number> = new EventEmitter<number>();


  constructor() {

  }


  ngOnInit(): void {

  }

  public sendCocktail(index : number):void {
     // envoie la valeur de l'index au composant parent qui gère la liste des cocktais
     this.clickCocktail.emit(index);
     

  }

}
