import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightData]',
})
export class HighlightDataDirective {
  @Input() set appHighlightData(style: string) {
    this.element.nativeElement.className = style;
  }

  constructor(private element: ElementRef<HTMLElement>) {}
}
