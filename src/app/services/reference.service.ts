import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RefOptions } from '../models/ref-option.model';

/**
 * For sending and retrieving referencing data from the backend
 */
@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }

  getRefOptions(): Observable<RefOptions> {
    return of(
      { 
        "key": "ReferenceOptions", 
        "label": "Reference Options", 
        "options": [
          { "uuid": "5abc0cec-9b1f-4ff8-96ab-33421154c49b", "name": "Test" },
          { "uuid": "data1", "name": "data1" }, { "uuid": "data2", "name": "data2" },
          { "uuid": "data3", "name": "data3" }
        ] 
      }
    );
  //return this.http.get<RefOptions>(environment.apiUrl + "/request/reference");
  }
}
