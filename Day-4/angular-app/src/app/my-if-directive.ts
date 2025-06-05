import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector:'[myIf]',
})
export class MyIfDirective{
    
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ){}

    @Input() set myIf(condition: boolean){
        this.viewContainer.clear();
        if(condition){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}