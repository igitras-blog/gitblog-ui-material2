import { Headers } from '@angular/http';
/**
 * Created by mason on 03/11/2016.
 */

export default class Requests {

    /**
     * Default http request header setting.
     *
     * @returns {Headers}
     */
    static getJsonHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
