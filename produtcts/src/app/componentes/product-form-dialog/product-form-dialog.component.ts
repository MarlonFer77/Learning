import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    price: ['', [ Validators.required ]],
    picture: ['', [ Validators.required ]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  

}
