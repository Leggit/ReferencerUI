import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * For sending and retrieving referencing data from the backend
 */
@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }
}
