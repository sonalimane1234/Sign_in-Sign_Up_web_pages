import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pwd-change',
  templateUrl: './pwd-change.component.html',
  styleUrls: ['./pwd-change.component.css']
})
export class PwdChangeComponent {
  form1: FormGroup; 
  
  constructor(fb: FormBuilder){
    this.form1 = fb.group({
      'oldPwd': ['',Validators.required,],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    }, {
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    });
  }

  get oldPwd(){
    return this.form1.get('oldPwd');
  }

   get newPwd(){
    return this.form1.get('newPwd');
  }

   get confirmPwd(){
    return this.form1.get('confirmPwd');
  }

}
