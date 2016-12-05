import { Requests } from './../utils/request';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class BaiduService {

    constructor(private http: Http, private requests: Requests) {
    }

    search(): Observable<Array<Book>> {
        let url = `http://api.openweathermap.org/data/2.5/weather`;

        let $books = this.http
            .get(url, this.requests.getOptions())
            .map(resp => resp.json());
        return $books;
    }
}
