import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktail';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'td-cocktail';
}
