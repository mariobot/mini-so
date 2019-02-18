import { Question } from './../_models/Question';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { QuestionServices } from '../../Services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  Questions: Question[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Question[]>('https://localhost:5001/api/question').subscribe(response => {
      this.Questions = response;
      console.log(response);
    }, error => {
      console.log(error);
});


  }

}
