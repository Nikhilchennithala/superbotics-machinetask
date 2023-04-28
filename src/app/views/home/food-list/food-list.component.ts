import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home/home.service';
import { Food } from '../../../shared/interfaces/search/search-food';
import { MatDialog } from '@angular/material/dialog';
import { ProductViewComponent } from 'src/app/shared/modal/product-view/product-view.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  fruits: any;
  searchText: string;
  @Input() searchQuery = "";
  
  constructor(private homeservice: HomeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void{
    this.homeservice.fetchFruits().subscribe((res) => {
      console.log('fruts', res);
      this.fruits = res.products;
    })
  }

  productview(item: any): void {
    console.log('iii', item)
    const dialogRef = this.dialog.open(ProductViewComponent, {
      width: '500px',
      height: '500px',
      data: { title: 'Dialog Title', content: item}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
