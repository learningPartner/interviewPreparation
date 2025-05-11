import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChnageDetectionComponent } from "./pages/chnage-detection/chnage-detection.component";
import { RxjsOperatorComponent } from "./pages/rxjs-operator/rxjs-operator.component";
import { ViewChildContentComponent } from "./pages/view-child-content/view-child-content.component";
import { MyButtonComponent } from './reusaabe/my-button/my-button.component';
import { NgContanierTempComponent } from "./pages/ng-contanier-temp/ng-contanier-temp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'interviewPreparation';

  cityData: string []= [];

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.cityData = ["Jaipur","Jodhpur"];
    // }, 6000);
    // window.addEventListener("message", (event) => {
    //   if (event.data && event.data.type === "THEME_CHANGE") {
    //     this.applyTheme(event.data.theme);
    //   }
    // });
  
    // // Optionally apply saved theme initially
    // const savedTheme = localStorage.getItem("theme") || "light";
    // this.applyTheme(savedTheme);
  }

  applyTheme(theme: string) {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  
    localStorage.setItem("theme", theme); // optional, if you want to persist
  }

  setTitle() {
    this.title = "Angular"
  }
}
