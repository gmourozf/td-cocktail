import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  constructor() { }
  
  @Input() public cocktail!: Cocktail;

  ngOnInit(): void {
  }

}
