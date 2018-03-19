import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Adebayo Ola', 'Donald Trump', 'Failure is not an option', new Date(2018, 3, 14)),
    new Quote(2, 'Adebayo Ola', 'Donald Trump', 'Failure is not an option', new Date(2018, 4, 14)),
    new Quote(3, 'Adebayo Ola', 'Donald Trump', 'Failure is not an option', new Date(2020, 3, 14)),
  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
