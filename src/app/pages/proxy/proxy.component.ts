import { Component, inject, OnInit } from '@angular/core';
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proxy',
  imports: [MyButtonComponent, CodeBlockComponent],
  templateUrl: './proxy.component.html',
  styleUrl: './proxy.component.css'
})
export class ProxyComponent implements OnInit {
  proxy = `{
    "/api": {
      "target": "https://projectapi.gerasim.in",
      "secure": true,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  }
  `
  pxoxy2 = `"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": { 
            "proxyConfig": "proxy.conf.json"
          },`

  old = `getData() {
    this.http.get('https://projectapi.gerasim.in/api/BankLoan/GetAllUsers').subscribe((result: any) => {
      console.log(result)
    });
  }`

  new = `getData() {
    this.http.get('/api/BankLoan/GetAllUsers').subscribe((result: any) => {
     console.log(result)
    });
  }`


  http = inject(HttpClient);


  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get("/api/BankLoan/GetAllUsers").subscribe((ReS:any)=>{
      debugger;
    })
  }
  
}
