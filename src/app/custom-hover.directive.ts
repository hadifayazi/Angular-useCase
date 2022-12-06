import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomHover]',
})
export class CustomHoverDirective implements OnInit {
  color: string = 'yellow';

  constructor(private elermentRef: ElementRef, private renderer: Renderer2) {
    // this.elermentRef.nativeElement.style.backgroundColor = this.color;
  }
  ngOnInit(): void {
    // this.elermentRef.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.elermentRef.nativeElement,
      'backgroundColor',
      this.color
    );
  }
}
