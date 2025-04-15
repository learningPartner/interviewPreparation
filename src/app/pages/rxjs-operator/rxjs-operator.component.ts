import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { combineLatest, combineLatestAll, combineLatestWith, concatMap, debounce, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, forkJoin, from, fromEvent, interval, mergeMap, Observable, of, switchMap, take } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
@Component({
  selector: 'app-rxjs-operator',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.css'
})
export class RxjsOperatorComponent implements OnInit ,AfterViewInit{

  
  producSrv = inject(ProductService);
  searchControl: FormControl = new FormControl("");
  stateFilter: FormControl = new FormControl("");
  cityFilter: FormControl = new FormControl("");

  userIdFilter : FormControl = new FormControl("");
  @ViewChild("loginBtn") loginBtn! : ElementRef;

  constructor(private prodSrv: ProductService) {
    // this.searchControl.valueChanges.subscribe((res)=>{
    //   if(res.length >3) {
    //     this.producSrv.searchProduct(res).subscribe((res)=>{
    //       console.log("data receioeve")
    //     })
    //   } 
    // })
    setTimeout(() => {
      const data =this.prodSrv.data;
      debugger;
    }, 10000);
    this.userIdFilter.valueChanges.subscribe((res:number)=>{
      this.producSrv.getCacheUserId(res).subscribe((Res:any)=>{
        debugger;
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

  ngOnInit(): void {
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

  getSerachFilter() {
    const stateFilter$ =  this.stateFilter.valueChanges;
    const cityFilter$ =  this.cityFilter.valueChanges;
    combineLatestWith
    combineLatest([stateFilter$,cityFilter$]).subscribe((res:any)=>{
      
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
