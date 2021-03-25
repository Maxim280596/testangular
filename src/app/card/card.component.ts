import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards;
  searchStr = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://demo3062546.mockable.io/products")
    .subscribe((data)=> this.displayCard(data))

  }

  displayCard(data) {
    this.cards = data.products;
    console.log(this.cards)
  }


}
