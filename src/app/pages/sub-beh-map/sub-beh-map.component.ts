import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, of, Subject } from 'rxjs';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-sub-beh-map',
  imports: [CodeBlockComponent],
  templateUrl: './sub-beh-map.component.html',
  styleUrl: './sub-beh-map.component.css'
})
export class SubBehMapComponent implements OnInit {

  http = inject(HttpClient);
  sampeArrStr=`[
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", username: "Ervin", email: "Ervin@april.biz" },
]`;
mapNewArr =`getUsers() {
  this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
   map((userList:any)=> userList.map((user:any)=> {
    return {id:user.id,name: user.name}
   }))
  ).subscribe((res:any)=>{ 
    //here you get array of differnt obj
    // [ {id:1,name: 'Leanne Graham'}, {id:2,name: 'Ervin Howell'} ]
  })
}`
getsuer2str =`getUsers2() {
  this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
   map((userList:any)=> userList.map((user:any)=>  ({id:user.id,name: user.name})))
  ).subscribe((res:any)=>{ 
    without using return keyword
    // [ {id:1,name: 'Leanne Graham'}, {id:2,name: 'Ervin Howell'} ]
  })
}`

  userName$ = new Subject<string>;
  fullName$  =  new Subject<void>;
  lastName : Subject<string> = new Subject<string>;
  middleName = new Subject<string>();

  subStr=`userName$ = new Subject<string>;
fullName$ =  new Subject<void> => when No data Emit;
lastName : Subject<string> = new Subject<string>;;
middleName = new Subject<string>();
If you Try to Initialize
middleName = new Subject<string>("Demo") => Error Expected 0 arguments, but got 1;`
  subEmitStr=`this.lastName.next("Jogi");
this.userName$.next("chetan11");`
subSubStr=`this.lastName.subscribe((value:string)=>{
  console.log(value)
})`;

  courseName = new BehaviorSubject<string>("Angular");
  courseFees$ = new BehaviorSubject<number>(1200); 

  behaStr=`courseName = new BehaviorSubject<string>("Angular");
courseFees$ = new BehaviorSubject<number>(1200);`
  behSubStr=`this.courseName.next("React");
this.courseName.subscribe((value:string)=>{
  console.log(value)
})`

  ngOnInit(): void {
    this.getUsers();
    this.filterStudent();
    debugger
    this.lastName.next("Jogi");
    this.userName$.next("chetan11");
    this.courseName.next("React");

    this.courseName.subscribe((value:string)=>{
      console.log(value)
    })
    this.lastName.subscribe((value:string)=>{
      console.log(value)
    })
  }

  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
     map((userList:any)=> userList.map((user:any)=> {
      return {id:user.id,name: user.name}
     }))
    ).subscribe((res:any)=>{ 
      //here you get array of differnt obj
      // [ {id:1,name: 'Leanne Graham'}, {id:2,name: 'Ervin Howell'} ]
    })
  }
  studentList$ = of(["Chetan","Rahul","Rakul","Arnav"]);
  arryStr =`studentList$ = of(["Chetan","Rahul","Rakul","Arnav"]);`
  filterstr=`this.studentList$.pipe(
  map((m:any)=> m.filter((name: string)=> name.startsWith('R')))
).subscribe((res:string[])=>{
  console.log(res);
})`

  filtertsr1= `interval(1000).pipe(
  filter(val => val % 2 === 0) // only even numbers
).subscribe(val => console.log('Even:', val));`

filterstr2 = `this.searchControl.valueChanges.pipe(
  filter(text => text.length >= 3)
).subscribe(value => {
  // Trigger API call here
});`

tapStr=`originalData: any;
getTestById() {
   return this.http.get("https://projectapi.gerasim.in/api/SoilTest/GetTestById?id=1").pipe(
     tap((response) => {
       //here we catch original data
       this.originalData = response;
     }),
     //then we modify data and send it back to subscriber
     map((result: any) => result.fddMeasurements)
   )
 }`
 oroftStr=`{
  "testDate": "2025-01-30T07:15:13.587",
  "remarks": "strin",
  "approvalStatus": "string",
  "createdDate": "2025-01-30T07:15:13.587",
  "fddMeasurements": [ 
    {
      "measurementId": 5,
      "testId": 1,
      "excavatedHoleVolume": 1.01,
      "wetSoilWeight": 1.01
    },
    {
      "measurementId": 21,
      "testId": 1,
      "excavatedHoleVolume": 2.01,
      "wetSoilWeight": 2.01
    }
  ]
}`
  filterStudent() {
    this.studentList$.pipe(
      map((m:any)=> m.filter((name: string)=> name.startsWith('R')))
    ).subscribe((res:string[])=>{
      console.log(res);
    })
    
  }

}
