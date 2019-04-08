import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CVEService{
http:any;
baseUrl: String;


contructor(http: Http){
    this.http = http;
    this.baseUrl = 'http://www.cvedetails.com/json-feed.php'
}
getPosts(category, limit){
    return this.http.get(this.baseUrl+'?numrows=10'+category+'&orderby=2&cvssscoremin='+limit).map(res=> res.json());
}

}

