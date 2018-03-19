import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Adebayo Ola', 'Donald Trump', 'Failure is not an option'),
    new Quote(2, 'Adebayo Ola', 'Donald Trump', 'Failure is not an option'),
    new Quote(3, 'Adebayo Ola', 'Donald Trump', 'Failure is not an option'),
  ]

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
