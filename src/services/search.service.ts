import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class SearchService {
    constructor (private http: HttpClient) {}
}