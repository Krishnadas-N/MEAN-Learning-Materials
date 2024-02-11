import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class Interceptors implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modeified = req.clone({
            setHeaders:{
                'Authorization':'Bearer Token'
            }
        })
       return  next.handle(modeified)
    }
}