import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appItalics]'
})
export class ItalicsDirective{
  private fontWeight = 'inherit';
  private fontStyle = 'italic';
  @HostBinding('style.fontStyle') get getFontStyle(): string{
    return this.fontStyle;
  }
  @HostBinding('style.fontWeight') get getFontWeight(): string{
    return this.fontWeight;
  }
  @HostBinding('style.cursor') get getCursor(): string{
    // return 'w-resize';
    // return 'crosshair';
    // return 'cell';
    return 'pointer';
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter(){
    this.fontWeight = 'bold';
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave(){
    this.fontWeight = 'normal';
  }
}
