import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  imgSrc: string = ''

  @Input()
  price: number = 0

  @Input()
  name: string = ''

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open(`${this.name} adquirido com sucesso`, '✔' , {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
