import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { concatMap, debounce, debounceTime, delay, distinctUntilChanged, from, mergeMap, of, switchMap } from 'rxjs';
@Component({
  selector: 'app-rxjs-operator',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.css'
})
export class RxjsOperatorComponent implements OnInit {

  
  producSrv = inject(ProductService);
  searchControl: FormControl = new FormControl("");
  constructor() {
    // this.searchControl.valueChanges.subscribe((res)=>{
    //   if(res.length >3) {
    //     this.producSrv.searchProduct(res).subscribe((res)=>{
    //       console.log("data receioeve")
    //     })
    //   } 
    // })
    this.searchControl.valueChanges.pipe(
      debounceTime(10),
      distinctUntilChanged(),
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
    //   debugger;
    // })
    this.userId2$.pipe(
      concatMap(res=> this.getUserDetail(res))
    ).subscribe((res:any)=>{
      debugger;
    })
    this.getUsers();
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
      debugger;
    })
  }
}
