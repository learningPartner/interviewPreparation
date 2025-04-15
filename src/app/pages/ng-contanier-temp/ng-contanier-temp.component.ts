import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { RxjsOperatorComponent } from "../rxjs-operator/rxjs-operator.component";

@Component({
  selector: 'app-ng-contanier-temp',
  imports: [NgFor, NgIf, NgTemplateOutlet, RxjsOperatorComponent],
  providers:[ProductService],
  templateUrl: './ng-contanier-temp.component.html',
  styleUrl: './ng-contanier-temp.component.css'
})
export class NgContanierTempComponent {


  studentList = [
    {name: "Chetan",isActive: false},
    {name: "Rahul",isActive: true},
    {name: "Sahil",isActive: false}
  ];

  produSeervice =  inject(ProductService)
  isProductActive: boolean = true;

  cityList = ["Pune","Maumbai","jaipur"]
  stateList = ["Mah","Punjab"]

  read() {
    const serviceData = this.produSeervice.data;
  }
}
