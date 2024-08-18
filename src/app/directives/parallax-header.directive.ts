import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {DomController} from "@ionic/angular";

@Directive({
  selector: '[appParallaxHeader]',
  standalone: true
})
export class ParallaxHeaderDirective implements OnInit{
  header: any;
  headerHeight: number = 0;
  moveImage: number = 0;
  scaleImage: number = 0;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    private domCtrl: DomController
  ) { console.log("constructor"); }

  ngOnInit() {
    let content = this.element.nativeElement;
    this.header = content.getElementsByClassName('parallax-image')[0];
    console.log("load");

    this.domCtrl.read(() => {
      this.headerHeight = this.header.clientHeight;
      console.log(this.headerHeight);
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop = $event.detail.scrollTop;
    console.log(scrollTop);

    this.domCtrl.write(() => {
      if (scrollTop >= 0) {
        this.moveImage = scrollTop / 8;
        this.scaleImage = 1;
      } else {
        this.moveImage = 0;
        this.scaleImage = -scrollTop / this.headerHeight + 1;
      }

      this.renderer.setStyle(this.header, 'transform', 'translate3d(0,' + this.moveImage + 'px,0) scale(' + this.scaleImage + ',' + this.scaleImage + ')');
    });
  }
}
