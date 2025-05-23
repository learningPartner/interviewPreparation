import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-chnage-detection',
  imports: [],
  templateUrl: './chnage-detection.component.html',
  styleUrl: './chnage-detection.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChnageDetectionComponent implements OnInit{


  @Input() cityData : string[]= [];

  cityList:string[] = [];

  constructor(private changeDetectionRef:ChangeDetectorRef,private prod: ProductService) {

  }

  addVale() {
    this.prod.data.name = "Angular";
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cityList = ["Pune","Nagpur","Delhi"];
      setTimeout(() => {
       // this.changeDetectionRef.detectChanges();
       this.changeDetectionRef.markForCheck();
      }, 5000);
     
    }, 5000);
  }

  showAlert() {
    this.changeDetectionRef.detach(); // Stops 
    //alert("AAA")
    setTimeout(() => {
      this.cityList = []; 
      }, 2000);
  }

  isRender() {
    console.log("isRender")
  }
}
