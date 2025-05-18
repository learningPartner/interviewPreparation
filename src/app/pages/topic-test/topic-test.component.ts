import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, DoCheck, ElementRef, inject, linkedSignal, OnDestroy, OnInit, signal, untracked, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";
import { concatMap, from, mergeMap, Subscription } from 'rxjs';
import { MyUlComponent } from "../../reusaabe/my-ul/my-ul.component";
import { ShowLessMoreComponent } from "../../reusaabe/show-less-more/show-less-more.component";
import { MyCardComponent } from "../../reusaabe/my-card/my-card.component";
import { MyTableComponent } from "../../reusaabe/my-table/my-table.component";

@Component({
  selector: 'app-topic-test',
  imports: [],
  templateUrl: './topic-test.component.html',
  styleUrl: './topic-test.component.css'
})
export class TopicTestComponent {




  constructor(private http: HttpClient) {
    // this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
    //   mergeMap((res: any) => this.http.get("https://jsonplaceholder.typicode.com/users/" + res[0].id))
    // ).subscribe((res: any) => {
    //   debugger;
    // })
    // this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
    //   mergeMap((res: any) => from(res)), // emit users one by one
    //   mergeMap((user: any) =>
    //     this.http.get("https://jsonplaceholder.typicode.com/users/" + user.id)
    //   )
    // ).subscribe((res: any) => {
    //   debugger;
    // });
    // from([2,3,4]).pipe(
    //   mergeMap((userid:number)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+userid))
    // ).subscribe((result:any)=>{
    //   debugger;
    // })
     from([2,3,4]).pipe(
      concatMap((userid:number)=> this.http.get("https://jsonplaceholder.typicode.com/users/"+userid))
    ).subscribe((result:any)=>{
      debugger;
    })
  }

  ngOnInit(): void {

  }


}
