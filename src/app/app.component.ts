import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChnageDetectionComponent } from "./pages/chnage-detection/chnage-detection.component";
import { RxjsOperatorComponent } from "./pages/rxjs-operator/rxjs-operator.component";
import { ViewChildContentComponent } from "./pages/view-child-content/view-child-content.component";
import { MyButtonComponent } from './reusaabe/my-button/my-button.component';
import { NgContanierTempComponent } from "./pages/ng-contanier-temp/ng-contanier-temp.component";

@Component({
  selector: 'app-root',
  imports: [MyButtonComponent, ViewChildContentComponent, NgContanierTempComponent, ChnageDetectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'interviewPreparation';

  cityData: string []= [];

  ngOnInit(): void {
    setTimeout(() => {
      this.cityData = ["Jaipur","Jodhpur"];
    }, 6000);
  }

  setTitle() {
    this.title = "Angular"
  }
}
