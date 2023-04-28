import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterFoodPipe } from './pipes/filter/filter-food.pipe';
import { ProductViewComponent } from './modal/product-view/product-view.component';
import { DeleteConfirmComponent } from './modal/delete-confirm/delete-confirm.component';



@NgModule({
  declarations: [FilterFoodPipe, ProductViewComponent, DeleteConfirmComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilterFoodPipe
  ]
})
export class SharedModule { }
