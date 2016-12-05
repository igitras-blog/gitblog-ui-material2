import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptionsArgs } from '@angular/http';
/**
 * Created by mason on 03/11/2016.
 */
@Injectable()
export class Requests {
    constructor(public router: Router) {}

    /**
     * Default http request header setting.
     *
     * @returns {Headers}
     */
    public getJsonHeaders(): Headers {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    /**
     * Build options with json Requests.
     *
     * @returns {RequestOptionsArgs}
     */
    public getOptions(): RequestOptionsArgs {
        let headers: Headers = this.getJsonHeaders();
        return <RequestOptionsArgs>({ headers: headers, withCredentials: true });
    }

    public handleError(error) {
        console.log(error.status);
        if (error.status === 401 || error.status === 0) {
            this.router.navigate(['/account/login']);
            return Observable.throw([]);
        } else if (error.status >= 400) {
            let respErr = this.convert(error);
            return Observable.throw(respErr);
        } else {
            // let errorMsg = error.message || `Yikes! There was was a problem with retrieve data!`;
            // console.error(errorMsg);
            return Observable.throw(error);
        }
    }

    private convert(error) {
        let plain = JSON.parse(error._body);
        return plain;
    }
}
