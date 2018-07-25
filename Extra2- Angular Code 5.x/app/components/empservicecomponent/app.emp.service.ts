import { Injectable } from "@angular/core";
import { Http, Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Employee } from "./app.emp.model";
@Injectable()
export class EmployeeService {
    url:string;
    constructor(private http: Http) {
        this.url = "http://apiappservicehome.azurewebsites.net/api/EmployeeInfoAPI";
     }

     get():Observable<Response> {
         let resp:Observable<Response>;
         resp = this.http.get(this.url);
         return  resp;
     }

     post(e:Employee):Observable<Response> {
        let options:RequestOptions = new RequestOptions();
        let headers:Headers = new Headers({"Content-Type":"application/json"});
        options.headers = headers;
        let resp:Observable<Response>;
        resp = this.http.post(this.url,JSON.stringify(e),options);
        return  resp;
    }

}