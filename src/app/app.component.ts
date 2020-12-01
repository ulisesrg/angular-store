import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';

  items = ['ulises', 'eduardo', 'roland'];

  addItem(): void {
    this.items.push('new item');
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
