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
