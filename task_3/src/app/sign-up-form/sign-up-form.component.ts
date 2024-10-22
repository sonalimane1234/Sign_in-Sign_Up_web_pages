import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data: any) {
    console.log(data);
    this.router.navigateByUrl('/');
}
}