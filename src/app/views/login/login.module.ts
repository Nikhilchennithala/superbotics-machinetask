import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './index/index.component';
import { CoreModule } from 'src/app/core/core.module';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CoreModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
