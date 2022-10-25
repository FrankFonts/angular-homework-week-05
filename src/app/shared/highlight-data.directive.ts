import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightData]',
})
export class HighlightDataDirective {
  @Input() set appHighlightData(style: string) {
    console.log(style);

    this.element.nativeElement.className = style;
    // this.element.nativeElement.classList.add(style);
  }

  constructor(private element: ElementRef<HTMLElement>) {}
}
