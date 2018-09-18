import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uname : string;
  validateName(){
    console.log("uname:",this.uname);
    console.log("name:",name);
    var name="ATT";
    console.log("name:",name);
    const var1=10;
    //var1=18;
    const nameArray= [7,8];
    //nameArray=[7,8,9];
    console.log("myArray:",nameArray);
    nameArray.push(4);
    console.log("myArray:",nameArray);
  }
}
