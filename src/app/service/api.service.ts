import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {
  private headers: HttpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('user', 'User123')
    .append('password', 'Password123');
  private baseUrl: string = 'api';

  constructor(private httpClient: HttpClient) {
  }

  public get(url: string): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}/`;

    return this.httpClient.get(finalUrl, {headers: this.headers});
  }

  public post(url: string, data: any): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}/`;

    return this.httpClient.post(finalUrl, data, {headers: this.headers});
  }
}
