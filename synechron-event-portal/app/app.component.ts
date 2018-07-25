import { Component } from "@angular/core"; 
import { Title } from "../node_modules/@angular/platform-browser";


 @Component({
    selector:'my-app',
    templateUrl: 'app.componet.html'
})
export class AppComponent{
    title:string ="Welcome to Synechron Pvt. Ltd. Pune"
    subTitle:string ="Core Devlopment Pune Devison and Bangalore!!!!!!!!!!";

    changeMyTitle():void{
            this.title =" Now Welcome to Mumbai Synechron office"
    }

}