import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

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
  @HostListener('mouseenter') onMouseenter(): void {
    this.renderer.setStyle(
      this.elermentRef.nativeElement,
      'backgroundColor',
      'pink'
    );
  }
  @HostListener('mouseleave') onMouseleave(): void {
    this.renderer.setStyle(
      this.elermentRef.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
