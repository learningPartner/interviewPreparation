import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";
import { Subscription } from 'rxjs';
import { MyUlComponent } from "../../reusaabe/my-ul/my-ul.component";
import { ShowLessMoreComponent } from "../../reusaabe/show-less-more/show-less-more.component";
import { MyCardComponent } from "../../reusaabe/my-card/my-card.component";
import { MyTableComponent } from "../../reusaabe/my-table/my-table.component";

@Component({
  selector: 'app-topic-test',
  imports: [MyButtonComponent, MyUlComponent, ShowLessMoreComponent, MyCardComponent, MyTableComponent],
  templateUrl: './topic-test.component.html',
  styleUrl: './topic-test.component.css'
})
export class TopicTestComponent {

 

  http = inject(HttpClient);
  sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae";
  
  userList: any[] = [];
  cityList: string [] = ["Mumbai","Jaipur","Nagpur","Pune"];
  courseName: string = "Angular";
  empList:any[] = [
    { empId:111,empName:'ABC',emmProjectName:'VVV'},
    { empId:22,empName:'AAA',emmProjectName:'AAACCCA'},
    { empId:33,empName:'XXX',emmProjectName:'FFF'},
    { empId:42,empName:'WWW',emmProjectName:'AATTAA'},
    { empId:54,empName:'QQ',emmProjectName:'RR'},
    { empId:22,empName:'QQQ',emmProjectName:'QQ'}
  ]
  cardTitleName: string = "AAAAA";

  constructor(private changeDetRef: ChangeDetectorRef) {
    setTimeout(() => {
      this.cardTitleName = "BBBBBB";
    }, 5000);
  }

  ngOnInit(): void {
    debugger;
    this.getUser();

  }

  getRecord() {
    this.courseName = "React Js";
    this.cityList = ["Thane"]
  }

  getUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userList = res;
      // setTimeout(() => {
      //   this.changeDetRef.detectChanges();
      // }, 5000);
     
    })
  }





}
