import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Catelog } from '../models/catelog';
import Requests from '../utils/request';
import { plainToClass } from 'class-transformer/index';
import Handler from '../utils/handler';

@Injectable()
export class CatelogService {


    constructor(private http: Http) {
    }

    load(bookId: string): Observable<Catelog> {
        let url = `${environment.BASE_URL}/books/${bookId}/catelog`;

        let $catelog = this.http
            .get(url, {headers: Requests.getJsonHeaders()})
            .map(resp => plainToClass(Catelog, resp.json()))
            .catch(Handler.handleError);
        return $catelog;
    }
}