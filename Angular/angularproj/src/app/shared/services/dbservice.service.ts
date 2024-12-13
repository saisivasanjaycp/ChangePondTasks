import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  baseUrl:string="http://localhost:8888"
  
  constructor(public httpObj:HttpClient) {}

//get the data
  getRecord(tableName:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}`);
  }
  //delete the data
  deleteRecord(tableName:any,id:any){
    return this.httpObj.delete(`${this.baseUrl}/${tableName}/${id}`);
  }
  //add the data
  addRecord(tableName:any,body:any){
    return this.httpObj.post(`${this.baseUrl}/${tableName}`,body);
  }
  //get request for single
  getSingleRecord(tableName:any,id:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}/${id}`);
  }
  //get request for single
  updateRecord(tableName:any,id:any,body:any){
    return this.httpObj.put(`${this.baseUrl}/${tableName}/${id}`,body);
  }
}
