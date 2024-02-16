import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  //get all category
  public categories(){
    return this.http.get(`${baseUrl}v1/category/`);
  }

  //get category by categoryId
  public getCategorybyId(catId:any){
    return this.http.get(`${baseUrl}v1/category/${catId}`)
  }

  //add category
  public addCategory(category: any){
    return this.http.post(`${baseUrl}v1/category/`,category);
  }

  //delete category
  public deleteCat(cid : any){
    return this.http.delete(`${baseUrl}v1/category/${cid}`);
  }
}
