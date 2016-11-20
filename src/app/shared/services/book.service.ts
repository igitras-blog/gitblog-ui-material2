import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { plainToClass, classToPlain } from 'class-transformer/index';
import Requests from '../utils/request';
import Handler from '../utils/handler';

@Injectable()
export class BookService {

    constructor(private http: Http) {
    }

    search(q: string): Observable<Array<Book>> {
        let url = `${environment.BASE_URL}/books?q=${q}`;

        let $books = this.http
            .get(url, {headers: Requests.getJsonHeaders()})
            .map(resp => resp.json())
            .map(resp => plainToClass(Book, resp))
            .catch(Handler.handleError);
        return $books;
    }

    find(id: string): Observable<Book> {
        let url = `${environment.BASE_URL}/books/${id}`;

        let $book = this.http
            .get(url, {headers: Requests.getJsonHeaders()})
            .map(resp => plainToClass(Book, resp.json()))
            .catch(Handler.handleError);
        return $book;
    }

    create(book: Book): Observable<Book> {
        let url = `${environment.BASE_URL}/books`;
        let $book = this.http
            .post(url, classToPlain(book), {headers: Requests.getJsonHeaders()})
            .map(resp => plainToClass(Book, resp.json()))
            .catch(Handler.handleError);
        return $book;
    }
}