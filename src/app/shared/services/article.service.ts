import { Requests } from './../utils/request';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { plainToClass } from 'class-transformer';
import { Http } from '@angular/http';

@Injectable()
export class ArticleService {

    constructor(private http: Http, private requests: Requests) {
    }

    search(bookId: string): Observable<Array<Article>> {
        let url = `${environment.BASE_URL}/books/${bookId}/articles`;

        let $articles = this.http
            .get(url, this.requests.getOptions())
            .map(resp => resp.json())
            .map(resp => plainToClass(Article, resp))
            .catch(this.requests.handleError);
        return $articles;
    }

    find(bookId: string, articleId: string): Observable<Article> {
        let url = `${environment.BASE_URL}/books/${bookId}/articles/${articleId}`;

        let $article = this.http
            .get(url, this.requests.getOptions())
            .map(resp => plainToClass(Article, resp.json()))
            .catch(this.requests.handleError);
        return $article;
    }
}
