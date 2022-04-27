import { Injectable, Inject } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, mergeMap, retryWhen } from 'rxjs/operators';
import { ApplicationHttpClient } from './application-http-client';

@Injectable()
export class DispatcherService {

    constructor(
        private applicationHttpClient: ApplicationHttpClient
    ) { }

    public getAsync<T>(url: string, options?: any): Observable<T> {
        return this.applicationHttpClient.Get<T>(url, options);
    }

    public postAsync<T>(url: string, data: any, options?: any): Observable<T> {
        return this.applicationHttpClient.Post(url, data, options);
    }

    public deleteAsync(url: string, data?: any) {
        return this.applicationHttpClient.Delete(url, { body: data });
    }

    public putAsync(url: string, data: any) {
        return this.applicationHttpClient.Put(url, data);
    }
}
