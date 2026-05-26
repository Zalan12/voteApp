import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}


      server="http://localhost:3000"


      readAll(table:string){
        return this.http.get(`${this.server}/${table}`)
      }

      insert(table:string,data:string){
        return this.http.post(`${this.server}/${table}`,data)
      }

      delete(table:string,id:number){
        return this.http.delete(`${this.server}/${table}/${id}`)
      }
}
