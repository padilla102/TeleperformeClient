import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { FindRegisterComponent } from './components/find-register/find-register.component';
import { CreateRegisterComponent } from './components/create-register/create-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from '../service/company.service';
import { BaseService } from '../service/base.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FindRegisterComponent,
    CreateRegisterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BaseService,
    CompanyService
  ]
})
export class CompanyModule { }
