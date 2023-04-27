import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodListComponent } from './food-list/food-list.component';


@NgModule({
  declarations: [DashboardComponent, FoodListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
