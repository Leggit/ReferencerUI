import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReferenceOptions } from '../models/reference-option.model';
import { IReference } from '../models/reference.model';

/**
 * For sending and retrieving referencing data from the backend
 */
@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }

  getRefOptions(): Observable<ReferenceOptions> {
    /*
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
    );*/
    return this.http.get<ReferenceOptions>(environment.apiUrl + "/request/reference");
  }

  getRefDetails(uuid: string): Observable<IReference> {
    return of({
      "name": "Web pages with no authors ",
      "fields": [
        {
          "uuid": "1", 
          "label": "Title of Internet site (in italics)",
          "type": "text",
          "placeholder": "Online Abertillery",
          "prefix": "",
          "suffix": "  ",
          "italic": true,
          "required": true
        },
        {
          "uuid": "2",
          "label": "Year that the site was published/last updated (in round brackets)",
          "type": "number",
          "placeholder": "2020",
          "prefix": "(",
          "suffix": ") ",
          "italic": false,
          "required": true
        },
        {
          "uuid": "3",
          "label": "Available at: URL",
          "type": "url",
          "placeholder": "https://google.com",
          "prefix": "Available at: ",
          "suffix": " ",
          "italic": false,
          "required": true
        },
        {
          "uuid": "4",
          "label": "(Accessed: date)",
          "type": "date",
          "placeholder": "(Accessed: 19 July 2010).",
          "prefix": "(Accessed: ",
          "suffix": ").",
          "italic": false,
          "required": true,
          "dateFormat": "ddMMMMyyyy"
        }
      ],
      "example": "<em>Online Abertillery</em> (2010) Available at: http://www.abertillery.net/tales_ghost.html (Accessed: 19 July 2010)."
    });
    //return this.http.get<RefModel>(environment.apiUrl + "/request/reference/" + "uuid")
  }
}