import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { combineLatest, combineLatestAll, combineLatestWith, concatMap, debounce, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, forkJoin, from, fromEvent, interval, mergeMap, Observable, of, Subject, switchMap, take, takeUntil } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rxjs-operator',
  imports: [FormsModule, ReactiveFormsModule, CodeBlockComponent,CommonModule ],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.css'
})
export class RxjsOperatorComponent implements OnInit ,AfterViewInit{

  inputCode = `<input type="text" [formControl]="searchControl" class="form-control" placeholder="search" />`;

  producSrv = inject(ProductService);
  searchControl: FormControl = new FormControl("");
  stateFilter: FormControl = new FormControl("");
  cityFilter: FormControl = new FormControl("");

  combLatStr =`stateFilter: FormControl = new FormControl("");
cityFilter: FormControl = new FormControl("");`
combGHtlStr=`<select [formControl]="stateFilter">
    <option value="">Select</option>
    <option value="MAH">MAH</option>
    <option value="GOA">GOA</option> 
</select> <select [formControl]="cityFilter">
    <option value="">Select</option>
    <option value="Nagpur">Nagpur</option> 
    <option value="Panji">Panji</option> 
</select>`

  userIdFilter : FormControl = new FormControl("");
  @ViewChild("loginBtn") loginBtn! : ElementRef;

  debound = `searchControl: FormControl = new FormControl("");`;
  text= `<input type="text" [formControl]="searchControl" placeholder="serch"/>`;
  docuContr =` constructor(private http: HttpClient) {
      this.searchControl.valueChanges.pipe(
        debounceTime(10),
        distinctUntilChanged(),
        switchMap((res:string)=> this.http.get("https://jsonplaceholder.typicode.com/users?search="+res))
      ).subscribe((response:any)=>{
        console.log(response)
      })
}`
docuContr2 =` constructor(private http: HttpClient) {
  this.searchControl.valueChanges.pipe(
    debounceTime(10),
    distinctUntilChanged(),
    filter((search:string)=> search.trim().length>3),
    switchMap((res:string)=> this.http.get("https://jsonplaceholder.typicode.com/users?search="+res))
  ).subscribe((response:any)=>{
    console.log(response)
  })
}`

cityList$ = of(['Pune','Nagpur','Mumbai','Thane']);
ofobs=`cityList$ = of(['Pune','Nagpur','Mumbai','Thane']);`
ofsub=`this.cityList$.subscribe((res:string[])=>{
      console.log(res)
})`;
mhCityList$ = from(['Pune','Nagpur','Mumbai','Thane'])
fromobs=`mhCityList$ = from(['Pune','Nagpur','Mumbai','Thane'])`;
fromobssub=`this.mhCityList$.subscribe((res:string)=>{ 
      console.log(res)
})`;

timeInterval$ = interval(1000);
intervlstr = `timeInterval$ = interval(1000);`
intersubstr =`this.timeInterval$.subscribe((res:number)=>{ 
      console.log(res)
})`

takeuntillstr = `timeInterval$ = interval(1000);
stopInterval$ = new Subject<void>;`
stopInterval$ = new Subject<void>;
untilsubStr=`this.timeInterval$.pipe(
  takeUntil(this.stopInterval$)
).subscribe(res=>{
  console.log(res)
  if(res ==5) {
    this.stopInterval$.next();
  }
})`
  constructor(private prodSrv: ProductService,private http: HttpClient) {
    this.cityList$.subscribe((res:string[])=>{
     
      console.log(res)
    })
    this.mhCityList$.subscribe((res:string)=>{
      
      console.log(res)
    })
    this.timeInterval$.subscribe((res:number)=>{
      //debugger;
      console.log(res)
    })
    
    this.timeInterval$.pipe(
      takeUntil(this.stopInterval$)
    ).subscribe(res=>{
      console.log(res)
      if(res ==5) {
        this.stopInterval$.next();
      }
    })
      this.searchControl.valueChanges.pipe(
        debounceTime(10),
        distinctUntilChanged(),
        filter((search:string)=> search.trim().length>3),
        switchMap((res:string)=> this.http.get("https://jsonplaceholder.typicode.com/users?search="+res))
      ).subscribe((res:any)=>{
        
      })



    // this.searchControl.valueChanges.subscribe((res)=>{
    //   if(res.length >3) {
    //     this.producSrv.searchProduct(res).subscribe((res)=>{
    //       console.log("data receioeve")
    //     })
    //   } 
    // })
    setTimeout(() => {
      const data =this.prodSrv.data;
     // debugger;
    }, 10000);
    this.userIdFilter.valueChanges.subscribe((res:number)=>{
      this.producSrv.getCacheUserId(res).subscribe((Res:any)=>{
        //debugger;
      })
    })
    this.searchControl.valueChanges.pipe(
      debounceTime(10),
      distinctUntilChanged(),
      filter((searchText: string)=> searchText.length >=3),
      switchMap((searchText)=> this.producSrv.searchProduct(searchText))
    ).subscribe((result)=>{
      console.log("data receioeve")
    })
  }
  
  userId$ =  from([1,2,3]);
  userId2$ =  from([1,2,3]);

  mhCityArray = of(['Pune','Nagpur','Mumbai','Thane'])
  mpCityArray = of(['Bhopal','Indore'])
  forkObsStr=`mhCityArray = of(['Pune','Nagpur','Mumbai','Thane'])
mpCityArray = of(['Bhopal','Indore'])
  `
  forkSubStr=`forkJoin([this.mhCityArray,this.mpCityArray]).subscribe((result:any)=>{ 
  console.log(result[0])
  console.log(result[1])
})`
  ngOnInit(): void {

    forkJoin([this.mhCityArray,this.mpCityArray]).subscribe((result:any)=>{
      debugger;
      console.log(result[0])
      console.log(result[1])
    })
    // this.userId$.pipe(
    //   mergeMap(res=> this.getUserDetail(res))
    // ).subscribe((res:any)=>{
    //   
    // })
    const myTimeInterval =  interval(1000);
    myTimeInterval.pipe(
      take(3)
    ).subscribe((res)=>{
      console.log("Interval" + res);
    })

    this.userId2$.pipe(
      concatMap(res=> this.getUserDetail(res))
    ).subscribe((res:any)=>{ 
    })
    this.getUsers();
    this.getDashboardData() 
    this.getSerachFilter();

    const obs$ = from([interval(1000).pipe(take(2)), interval(1500).pipe(take(2))]);
    obs$.pipe(
      combineLatestAll()
    ).subscribe((res)=>{
      
    });
    this.getTestData()
  }

  getTestData() {
    this.producSrv.getTestById().subscribe((Res:any)=>{
      
    })
  }

  combLateSubStr=`const stateFilter$ =  this.stateFilter.valueChanges;
const cityFilter$ =  this.cityFilter.valueChanges; 
combineLatest([stateFilter$,cityFilter$]).subscribe((res:any)=>{
  this will execute when both dropdown has value
})`
comblatewith =`stateFilter$.pipe(
  combineLatestWith(cityFilter$)
).subscribe((result:any)=>{
  this will execute when both dropdown has value
})`
  getSerachFilter() {
    const stateFilter$ =  this.stateFilter.valueChanges;
    const cityFilter$ =  this.cityFilter.valueChanges;

    stateFilter$.pipe(
      combineLatestWith(cityFilter$)
    ).subscribe((result:any)=>{
      debugger;
      
    })
   // combineLatestWith
    combineLatest([stateFilter$,cityFilter$]).subscribe((res:any)=>{
      debugger;
    })
  }

  ngAfterViewInit(): void {
    
    fromEvent(this.loginBtn.nativeElement,'click').pipe
    (
      exhaustMap(()=>{
        
        const obj = {uName:'test',uPwd:'11223'};
        return this.login(obj.uName,obj.uPwd)
      })
    ).subscribe((res:any)=>{
      
    })
  }
  login(uName: string,pwd: string) : Observable<any> {
    console.log("login login")
    return of({userId:123,uName:'test',uPwd:'11223'}).pipe(
      delay(5000)
    )
  }

  getUserDetail(id: number) {
    return of ({userrId:id,userName:'Test Name'}).pipe(delay(1000 * id));
  }

  getAllUsers() {
    this.producSrv.getUsers().subscribe((res:any)=>{
      const userList = res;
      this.producSrv.getUserById(userList[0].id).subscribe((res:any)=>{
        console.log(res)
      })
    })
  }
  meprMapStr =`getUsers() {
  this.producSrv.getUsers().pipe(
    mergeMap((res:any)=> this.producSrv.getUserById(res[0].id))
  ).subscribe((result)=>{
    
  })
}`

  getUsers() {
    this.producSrv.getUsers().pipe(
      mergeMap((res:any)=> this.producSrv.getUserById(res[0].id))
    ).subscribe((result)=>{
      
    })
  }

  getDashboardData() {
    const user$ = this.producSrv.getUsers();
    const posts$ =  this.producSrv.getPosts();

    forkJoin([user$,posts$]).subscribe((res:any)=>{
      
    })
  }
}
