import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Options {
    headers?: HttpHeaders;
    params?: HttpParams | { [params: string]: any };
}

@Injectable()
export class BaseService {
    constructor(protected http: HttpClient) { }

    public createDefaultOptions(): Options {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    protected createOptionsFormData(): Options {
        return {
          headers: new HttpHeaders()
        };
    }

    public doGet<T>(serviceUrl: string): Observable<T> {
        const defaultOpts: Options = this.createDefaultOptions();

        const opts = {
            params: defaultOpts.params,
            headers: defaultOpts.headers
        };

        return this.http.get(serviceUrl, opts).pipe(
            map(response => response as T)
        );
    }

    public doGetParameters<T>(serviceUrl: string, parametros: URLSearchParams, opts: Options): Observable<T> {
        const defaultOpts: Options = this.createDefaultOptions();

        opts = {
            params: defaultOpts.params,
            headers: defaultOpts.headers
        };
       
        const options = parametros !== null ? {
            headers: defaultOpts.headers,
            params: parametros
        } : defaultOpts;

        return this.http.get(serviceUrl, options).pipe(
            map(response => response as T)
        );
    }

    public doPost<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
        const defaultOpts: Options = this.createDefaultOptions();

        const ropts = {
            params: defaultOpts.params,
            headers: defaultOpts.headers
        };

        return this.http.post(serviceUrl, body, ropts).pipe(
            map(response => response as R)
        );
    }

    public doPut<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
        const defaultOpts: Options = this.createDefaultOptions();

        const ropts = {
            params: defaultOpts.params,
            headers: defaultOpts.headers
        };

        return this.http.put(serviceUrl, body, ropts).pipe(
            map(response => response as R)
        );
    }
}
