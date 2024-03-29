import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
import { AppComponent } from './app.component';
@Directive({
    selector: '[customdropdown]'
})
export class CustomDropdownDirective {

    isOpen = false;
    constructor(private _el: ElementRef, private cust: AppComponent) {

    }
    @HostBinding('class.show') get opened() {
        return this.isOpen;
    }
    @HostListener('click') open() {

        if (!this.isOpen) {
            this.isOpen = true;
            const div = document.querySelector('nav .dropdown-menu');
            div.className = 'dropdown-menu show';

            console.log("show");
        }
        else {
            this.isOpen = false;
            const div = document.querySelector('nav .dropdown-menu');
            div.className = 'dropdown-menu';


            console.log("hide");
        }
    }
    @HostListener('document:click', ['$event.target']) close(targetElement) {
        let inside: boolean = this._el.nativeElement.contains(targetElement);
        if (!inside) {
            if (this.isOpen == true) {
                const div = document.querySelector('nav .dropdown-menu');
                div.className = 'dropdown-menu';
                this.isOpen = !this.isOpen;
                console.log("document");
            }
        }
    }
}