import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Todos';
  constructor() {
    this.changeName('Brad');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
