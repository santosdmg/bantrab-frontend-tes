import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable()
export class ApiService {
  private headers: HttpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('user', 'User123')
    .append('password', 'Password123');
  // private baseUrl: string = environment.production ? environment.api_url : 'api';
  private baseUrl: string = 'api'

  constructor(private httpClient: HttpClient) {
  }

  public get(url: string): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}/`;

    return this.httpClient.get(finalUrl, {headers: this.headers});
  }
}
