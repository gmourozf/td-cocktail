import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  imgMojito ="https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375"
  nomMojito =  "Mojito"
  description = "description Mojito"
  constructor() { }

  ngOnInit(): void {
  }

}
