import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindRegisterComponent } from './components/find-register/find-register.component';
import { CreateRegisterComponent } from './components/create-register/create-register.component';

const routes: Routes = [
  { path: '', component: FindRegisterComponent  },
  { 
    path: 'buscar', 
    component: FindRegisterComponent 
  },
  { 
    path: 'registro', 
    component: CreateRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
