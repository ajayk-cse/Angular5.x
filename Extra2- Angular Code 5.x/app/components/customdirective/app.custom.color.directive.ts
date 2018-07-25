import { Directive,Input,Renderer,HostListener,ElementRef } from "@angular/core";

@Directive({ selector: "[selectColor]" })
export class ColorDirective {
    constructor(private ele:ElementRef,private renderer:Renderer) { }
    // properties
    @Input() defaultColor:string;
    @Input("selectColor") applyColor:string;

    // the Logical function of Directive

    private applyBackColor(color:string):void {
        this.renderer.setElementStyle(
            this.ele.nativeElement,
            "backgroundColor",
            color
        );
    }

    // define event functions which will cause directive to execute
    @HostListener("mouseenter")
    onMouseEnter():void {
        this.applyBackColor(this.applyColor||this.defaultColor||"magenta");
    }
    @HostListener("mouseleave")
    onMouseLeave():void {
        this.applyBackColor(null);
    }

}