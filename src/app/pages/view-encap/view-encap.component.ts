import { Component, ViewEncapsulation } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";
import { LifeCycleComponent } from "../life-cycle/life-cycle.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
 
@Component({
  selector: 'app-view-encap',
  imports: [CodeBlockComponent, MyButtonComponent, LifeCycleComponent],
  templateUrl: './view-encap.component.html',
  styleUrl: './view-encap.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapComponent {

  emoult1 = `@Component({
  selector: 'app-example',
  template: '<h1 class='title'>Hello World</h1>',
  styles: ['.title { color: blue; }'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {}
`
  private apiUrl = `${environment.apiBaseUrl}/users`;
  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get('/api/BankLoan/GetAllUsers').subscribe((RES: any) => {
      debugger
    });
  }

  // getUsers() {
  //   if (environment.isMockEnabled) {
  //     // If mock is enabled, return mock data from the assets folder
  //      this.http.get('/assets/mock/users.json').subscribe((RES: any) => {
  //       debugger
  //     });; // Static mock file
  //   } else {
  //     // Else, make a real API call
  //      this.http.get(this.apiUrl).subscribe((RES: any) => {
  //       debugger
  //     });; // Real API URL
  //   }
  // }
}
