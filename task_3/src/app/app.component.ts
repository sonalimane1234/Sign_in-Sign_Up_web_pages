import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  outlet: RouterOutlet = new RouterOutlet;
triggerAnimation(_t2: RouterOutlet) {
throw new Error('Method not implemented.');
}
  title = 'task_3';
}
