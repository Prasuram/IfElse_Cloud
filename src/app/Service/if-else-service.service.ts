import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IfElseServiceService {

  constructor(private _http: HttpClient,) { }

  get_Top_Card(){
    return this._http.get<any>("https://1.api.fy23ey05.careers.ifelsecloud.com/").pipe(retry(1));
  }

}
