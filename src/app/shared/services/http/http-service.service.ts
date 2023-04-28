import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl: string;
  header: any;

  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.baseurl1}/`;
    this.header = new HttpHeaders();
  }

  //  HTTP `POST`
  post(url: string, postData: any, isShowGlobalLoader:boolean) {
    let headers = new HttpHeaders();
    if(isShowGlobalLoader)
      headers = headers.set('Loader', 'true');
    return this.http.post(this.apiUrl + url, postData, { headers: headers }).pipe(map(res => {
      return res;
    }));
  }

  //  HTTP `GET`
  get(url: string) {
    let headers = new HttpHeaders();
    return this.http.get(this.apiUrl + url, { headers: headers }).pipe(map(res => {
      return res;
    }));
  }

  //  HTTP `PUT`
  put(url: string, putData: any, isShowGlobalLoader:boolean) {
    let headers = new HttpHeaders();
    if(isShowGlobalLoader)
      headers = headers.set('Loader', 'true');
    return this.http.put(this.apiUrl + url, putData).pipe(map(res => {
      return res;
    }));
  }

  //  HTTP `DELETE`
  delete(url: string, isShowGlobalLoader:boolean) {
    let headers = new HttpHeaders();
    if(isShowGlobalLoader)
      headers = headers.set('Loader', 'true');
    return this.http.delete(this.apiUrl + url).pipe(map(res => {
      return res;
    }));
  }

   //  HTTP `POST` for file download
   export(url: string, postData: any, isShowGlobalLoader:boolean) {
    let headers = new HttpHeaders();
    if(isShowGlobalLoader)
      headers = headers.set('Loader', 'true');
      return this.http.post<Blob>(this.apiUrl + url, postData, { headers: headers, responseType: 'blob' as 'json' }).pipe(map(res => {
        return res;
      }));
  }
}
