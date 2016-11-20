import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import Requests from '../utils/request';
import { plainToClass } from 'class-transformer';
import Handler from '../utils/handler';
import { Http } from '@angular/http';

@Injectable()
export class ArticleService {

    constructor(private http: Http) {
    }

    search(bookId: string): Observable<Array<Article>> {
        let url = `${environment.BASE_URL}/books/${bookId}/articles`;

        let $articles = this.http
            .get(url, {headers: Requests.getJsonHeaders()})
            .map(resp => resp.json())
            .map(resp => plainToClass(Article, resp))
            .catch(Handler.handleError);
        return $articles;
    }

    find(bookId: string, articleId: string): Observable<Article> {
        let url = `${environment.BASE_URL}/books/${bookId}/articles/${articleId}`;

        let $article = this.http
            .get(url, {headers: Requests.getJsonHeaders()})
            .map(resp => plainToClass(Article, resp.json()))
            .catch(Handler.handleError);
        return $article;
    }
}