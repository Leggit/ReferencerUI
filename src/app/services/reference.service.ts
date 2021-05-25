import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReferenceOption } from '../models/reference-option.model';
import { IField, IReference } from '../models/reference.model';

/**
 * For sending and retrieving referencing data from the backend
 */
@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }

  getRefOptions(): Observable<ReferenceOption[]> {
    return this.http.get<any>(environment.apiUrl + "/request/reference").pipe(
      map((options: any) => {
        const array: ReferenceOption[] = []
        for(let key in options) {
          array.push({ uuid: key, name: (options[key]) })
        }
        return array
      })
    );
  }

  getRefDetails(uuid: string): Observable<IReference> {
    return this.http.get<IReference>(environment.apiUrl + "/request/reference/" + uuid)
  }
}