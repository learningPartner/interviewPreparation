import { Component } from '@angular/core';
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-proxy',
  imports: [MyButtonComponent, CodeBlockComponent],
  templateUrl: './proxy.component.html',
  styleUrl: './proxy.component.css'
})
export class ProxyComponent {

  proxy =`{
    "/api": {
      "target": "https://projectapi.gerasim.in",
      "secure": true,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  }
  `
  pxoxy2= `"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": { 
            "proxyConfig": "proxy.conf.json"
          },`

          old= `getData() {
    this.http.get('https://projectapi.gerasim.in/api/BankLoan/GetAllUsers').subscribe((result: any) => {
      console.log(result)
    });
  }`

  new=`getData() {
    this.http.get('/api/BankLoan/GetAllUsers').subscribe((result: any) => {
     console.log(result)
    });
  }`
}
