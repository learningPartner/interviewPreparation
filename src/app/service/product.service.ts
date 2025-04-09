import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  searchProduct(serachTerm: string )  {
    console.log("serachTerm" +serachTerm)
    return this.http.get("https://jsonplaceholder.typicode.com/users/1")
  }

  
  getUsers()  { 
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  
  getUserById(id: number )  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+ id)
  }

}
