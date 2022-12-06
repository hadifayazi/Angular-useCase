import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomHover]',
})
export class CustomHoverDirective implements OnInit {
  color: string = 'yellow';
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    console.log(
      (this.elementRef.nativeElement.style.backgroundCoror = this.color)
    );
  }
}
