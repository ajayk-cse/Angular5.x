import { Injectable } from "@angular/core";
import { Http, Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SecureService {
    url:string;
    constructor(private http: Http) {
        this.url = "http://localhost:3491/api/EmployeeInfo";
     }
     get():Observable<Response> {
         let resp:Observable<Response>;
         let headers:Headers =new Headers();
         headers.append("AUTHORIZATION",`basic ${btoa("mahesh:mahesh")}`);
         let options:RequestOptions = new RequestOptions();
         options.headers = headers;
         resp = this.http.get(this.url,options);
         return  resp;
     }

}