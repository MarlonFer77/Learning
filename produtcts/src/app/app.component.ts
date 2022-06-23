import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from './componentes/product-form-dialog/product-form-dialog.component';
import { Products } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRODUCTS';
  products: Products[] = []

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogoRef = this.dialog.open(ProductFormDialogComponent)
      dialogoRef.afterClosed().subscribe(
        value => {
          //console.log(value);
          //console.log(this.products);
          
          if (value) {
            this.products.push (value);
            //console.log(this.products);
            
          }

      }
    )
  }
}

