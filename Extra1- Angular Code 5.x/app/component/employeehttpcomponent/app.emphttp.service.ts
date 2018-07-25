import { Injectable } from "@angular/core";
// 1. Import required Objects for Http Service
// the Http --> Class provides Http Methods for get/post/put/delet
// the Response --> The Received response
// the Headers --> Used to define Request Headers e.g. Content-Type
// the RequestOptions --> Headers Value collection to be passed with Request
import { Http, Response, Headers, RequestOptions } from "@angular/http";
// import Observable from rxjs
import { Observable } from "rxjs";
import { Employee } from "./app.employee.model";

@Injectable()
export class EmployeeHttpService {
  url: string;

  // inject Http Object
  constructor(private http: Http) {
    this.url = "http://testwebapiapp123.azurewebsites.net/api/Employee";
  }

  get(): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.get(this.url);
    return resp;
  }

  post(emp: Employee): Observable<Response> {
    let resp: Observable<Response>;
    // 1. Define Headers for Request Header
    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    // 2. Define RequestOptions and pass headers to it
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    resp = this.http.post(this.url, JSON.stringify(emp), options);
    return resp;
  }

  put(id: number, emp: Employee): Observable<Response> {
    let resp: Observable<Response>;
    // 1. Define Headers for Request Header
    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    // 2. Define RequestOptions and pass headers to it
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    resp = this.http.put(`${this.url}/${id}`, JSON.stringify(emp), options);
    return resp;
  }
  delete(id: number): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.delete(`${this.url}/${id}`);
    return resp;
  }
}