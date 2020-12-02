import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
  }

  // more complex example:
  // constructor(
  //   private element: ElementRef
  // ) { }
  // @Input() backgroundColor: string;
  // @Input() color: string;
  // ngOnInit(): void {
  //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  //   this.element.nativeElement.style.color = this.color;
  // }
  // Inside template:
  // <p appHighlight [backgroundColor]="'black'" [color]="'#ffffff'">
  //   {{product.title | uppercase}}
  // </p>
}
