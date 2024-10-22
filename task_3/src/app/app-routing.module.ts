import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PwdChangeComponent } from './pwd-change/pwd-change.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
},
{
    path: 'login', component: SignInFormComponent
},
  {
    path: 'Sign in',
    component : SignInFormComponent
  },
  {
    path:  'password? ',
    component : ForgotPasswordComponent
  },

 {path:'pwd',component:ForgotPasswordComponent},
 {path:'Sing Up',component:PwdChangeComponent},
 {path:'pwd',component:PwdChangeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
