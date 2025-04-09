import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChnageDetectionComponent } from "./pages/chnage-detection/chnage-detection.component";
import { RxjsOperatorComponent } from "./pages/rxjs-operator/rxjs-operator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChnageDetectionComponent, RxjsOperatorComponent],
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
