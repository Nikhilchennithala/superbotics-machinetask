import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, FoodListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    NgMaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
