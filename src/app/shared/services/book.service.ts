import { Requests } from './../utils/request';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { plainToClass, classToPlain } from 'class-transformer/index';


@Injectable()
export class BookService {

    constructor(private http: Http, private requests: Requests) {
    }

    search(q: string): Observable<Array<Book>> {
        let url = `${environment.BASE_URL}/books?q=${q}`;

        let $books = this.http
            .get(url, this.requests.getOptions())
            .map(resp => resp.json())
            .map(resp => plainToClass(Book, resp));
        return $books;
    }

    find(id: string): Observable<Book> {
        let url = `${environment.BASE_URL}/books/${id}`;

        let $book = this.http
            .get(url, this.requests.getOptions())
            .map(resp => plainToClass(Book, resp.json()))
            .catch(this.requests.handleError);
        return $book;
    }

    create(book: Book): Observable<Book> {
        let url = `${environment.BASE_URL}/books`;
        let $book = this.http
            .post(url, classToPlain(book), this.requests.getOptions())
            .map(resp => plainToClass(Book, resp.json()))
            .catch(this.requests.handleError);
        return $book;
    }
}
