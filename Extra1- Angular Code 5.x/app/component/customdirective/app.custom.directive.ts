// the directive will be activated based on mouse events
// and will be used to apply colors on HTML Elements

import { Directive,HostListener,Input,ElementRef,Renderer } from "@angular/core";

@Directive({
    selector:"[selColor]"
})
export class ColorDirective {
    // inject ElementRef and Renderer in Directive Ctor
    // the instance of these woill be provided by BrowserModule
    constructor(private element:ElementRef,private renderer:Renderer) {}

    // declare properties which will accept inputs for directive

    @Input("selColor") selColor:string;

    // implement logic for Directive

    private applyColor(color:string):void {
        this.renderer.setElementStyle(this.element.nativeElement,
             "backgroundColor",color);
    }

    // specify events for activating/deactivating directive
    @HostListener("mouseenter")
    onMouseEnter():void {
        this.applyColor(this.selColor || "cyan");
    }

    @HostListener("mouseleave")
    onMouseLeave():void {
        this.applyColor(null);
    }

}