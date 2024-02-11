import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  ParallelRequest():Observable<any[]>{
   return  forkJoin([
    this.http.get('https://api.github.com/users/octocat'),
    this.http.get('https://api.github.com/users/octocat')
   ]
  )
    }

}
