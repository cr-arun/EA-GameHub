import { Component } from '@angular/core';

@Component({
  selector: 'app-suggessions',
  templateUrl: './suggessions.component.html',
  styleUrls: ['./suggessions.component.css']
})
export class SuggessionsComponent {
  suggestions = [
    { name: 'Forza Horizon', image: 'assets/suggestions/sugg1.png' },
    { name: 'The Legend of Zelda', image: 'assets/suggestions/sugg2.png' },
    { name: 'Overwatch', image: 'assets/suggestions/sugg3.png' },
  ];
}
