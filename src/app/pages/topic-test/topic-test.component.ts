import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {  debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-topic-test',
  imports: [ReactiveFormsModule],
  templateUrl: './topic-test.component.html',
  styleUrl: './topic-test.component.css'
})
export class TopicTestComponent  {


   
  http  = inject(HttpClient);

  serchControl: FormControl =  new FormControl("");
  constructor() {
  
    this.serchControl.valueChanges.pipe(
       debounceTime(300),
       distinctUntilChanged(),
       filter((search: string)=> search.trim().length > 3),
       switchMap((search) => this.http.get("https://dummyjson.com/products/search?q="+search))
    ).subscribe((res:any)=>{
      console.log(res)
    })

    // this.serchControl.valueChanges.subscribe((search:string) => {
    //   this.http.get("https://dummyjson.com/products/search?q="+search).subscribe((res: any)=>{
    //     console.log(res)
    //   })
    // })
     
  }

  
}
