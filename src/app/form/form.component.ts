import { Component } from "@angular/core";

@Component({
    selector:'app-input',
    templateUrl:'./form.component.html',
    styleUrls:['./form.component.less','../../app/app.component.less'],
})



export class InputComponent {
    active: boolean = false;
    
    onChange(e:Event) {
        this.active = true
        console.log(e.target);
      }
}

