import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  @Input('appBorder') color: string = 'blue'

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'border',`2px solid ${this.color}`);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement,'border')
  }
}
