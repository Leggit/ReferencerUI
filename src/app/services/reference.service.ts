import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RefOptions } from '../models/ref-option.model';
import { RefModel } from '../models/ref.model';

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

  getRefDetails(uuid: string): Observable<RefModel> {
    return of({
      uuid: "123",
      name: "Journal article (printed)",
      fields: [
        { name: "Authors", label: "Authors", type: "text", required: true },
        { name: "Year", label: "Year of publication", type: "number", required: true },
        { name: "ArticleTitle", label: "Title Of Article", type: "text", required: true },
        { name: "JournalTitle", label: "Title of Journal", type: "text", required: true },
        { name: "Volume", label: "Volume Number", type: "number", required: true },
        { name: "Issue", label: "Issue Number", type: "number", required: false },
        { name: "Url", label: "Available At", type: "text", required: true },
        { name: "AccessedDate", label: "Accessed", type: "date", required: true }
      ],
      format: "{Authors}, ({Year}) '{ArticleTitle}', <em>{JournalTitle}</em>, {Volume}{?({Issue})}, Available At: {Url} (Accessed: {AccessedDate})"
    });
    //return this.http.get<RefModel>(environment.apiUrl + "/request/reference/" + "uuid")
  }
}
