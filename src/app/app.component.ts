import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text = 'toto je text';
  
   clickHandler() {
    debugger;
  this.text = 'uz to nieje text';
  alert('sss');
  }
}
