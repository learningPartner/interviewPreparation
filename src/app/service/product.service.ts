import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  originalData: any;
  data: any = {}

  onLoggedUSerData: Subject< string> = new Subject<string>();

  private userDetailCache = new Map<number, Observable<any>>();
 
  
  constructor(private http: HttpClient) { }

  searchProduct(serachTerm: string )  {
    console.log("serachTerm" +serachTerm)
    return this.http.get("https://jsonplaceholder.typicode.com/users/1")
  }

  
  getUsers()  { 
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  
  getUserById(id: number )  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+ id)
  }

  getCacheUserId(id: number )  {
    if (!this.userDetailCache.has(id)) {
      const product$ = this.http.get("https://jsonplaceholder.typicode.com/users/"+ id).pipe(
        shareReplay(1) // Cache the last value for this productId
      );
      this.userDetailCache.set(id, product$);
    }

    return this.userDetailCache.get(id)!;
  }


  getTestById() {
    return this.http.get("https://projectapi.gerasim.in/api/SoilTest/GetTestById?id=1").pipe(
      tap((response) => {
        //here we catch original data
        this.originalData = response;
      }),
      //then we modify data and send it back to subscriber
      map((result: any) => result.fddMeasurements)
    )
  }
}
