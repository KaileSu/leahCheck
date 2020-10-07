import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/chat/components/login/login.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { ProdGetComponent } from './prod-get/prod-get.component';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'prodadd-component', component: ProdAddComponent },
  { path: 'prodedit-component', component: ProdEditComponent },
  { path: 'prodget-component', component: ProdGetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
