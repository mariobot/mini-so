import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

constructor(private http: HttpClient) { }

getAllQuestions(): Observable<object> {
  return this.http.get('https://localhost:5001/api/question');
}

}
