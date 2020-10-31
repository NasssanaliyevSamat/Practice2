import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice2';
  tojson = '{"Company": "Google","CEO": "Pichai Sundararajan"}';
  json = JSON.parse(this.tojson);
}
