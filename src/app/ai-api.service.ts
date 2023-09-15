import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiApiService {

  private apiUrl = 'https://thunder-cracker-gcp.uc.r.appspot.com';

  constructor(private http: HttpClient) { }



  searchContent(searchText: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const body = { statement: searchText };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Use the post method to send data in the body
    return this.http.post(url, body, { headers }).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        // Handle the error as needed, e.g., show an error message to the user.
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
}
