import { Requests } from './../utils/request';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Catelog } from '../models/catelog';
import { plainToClass } from 'class-transformer/index';


@Injectable()
export class CatelogService {

    constructor(private http: Http, private requests: Requests) {
    }

    load(bookId: string): Observable<Catelog> {
        let url = `${environment.BASE_URL}/books/${bookId}/catelog`;

        let $catelog = this.http
            .get(url, this.requests.getOptions())
            .map(resp => plainToClass(Catelog, resp.json()))
            .catch(this.requests.handleError);
        return $catelog;
    }
}
