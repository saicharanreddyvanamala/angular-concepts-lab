import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = ''

  @HostListener('mouseenter')
  onMouseEnter(){
    this.bg = 'yellow'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.bg = ''
  }
}
