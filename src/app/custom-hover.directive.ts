import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomHover]',
})
export class CustomHoverDirective implements OnInit {
  color: string = 'yellow';

  constructor(private elermentRef: ElementRef) {
    this.elermentRef.nativeElement.style.backgroundColor = this.color;
  }
  ngOnInit(): void {}
}
