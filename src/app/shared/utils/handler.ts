import { Observable } from 'rxjs/Rx';
/**
 * Created by mason on 03/11/2016.
 */
export default class Handler {

    static handleError(error: any) {
        let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
        // console.error(errorMsg);
        return Observable.throw(errorMsg);
    }

}
