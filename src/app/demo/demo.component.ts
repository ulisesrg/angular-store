import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'angular-store';

  items: string[] = ['ulises', 'eduardo', 'roland'];

  power = 10;

  constructor() { }

  ngOnInit(): void {
  }


  addItem(): void {
    this.items.push('new item');
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
