import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReferenceOption } from '../models/reference-option.model';
import { IField, IReference } from '../models/reference.model';
import { referenceData } from './reference-data';

/**
 * For sending and retrieving referencing data from the backend
 */
@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  constructor(private http: HttpClient) {}

  getRefOptions(): Observable<ReferenceOption[]> {
    return of(referenceData).pipe(delay(500));
  }

  getRefDetails(uuid: string): Observable<IReference> {
    const reference = referenceData.find(
      (reference) => reference.uuid === uuid
    )!;
    reference.fields = reference.fields.map((field, index) => ({
      ...field,
      position: index,
    }));
    return of(reference as any).pipe(delay(500));
  }
}
