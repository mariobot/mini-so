import { Answer } from './../_models/Answer';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../_models/Question';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questanswer',
  templateUrl: './questanswer.component.html',
  styleUrls: ['./questanswer.component.css']
})
export class QuestanswerComponent implements OnInit {
  qst: Question;
  ans: Answer;
  myForm: FormGroup;
  idQuestion: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.idQuestion = this.route.snapshot.paramMap.get('id');
    this.getQuestion(this.idQuestion);
    this.myForm  = this.formBuilder.group({
      answer: ''
    });
  }

  getQuestion(id) {
    const url = 'https://localhost:5001/api/question/' + id;
    this.http.get<Question>(url).subscribe(response => {
      this.qst = response;
      console.log(this.qst);
    }, error => {
      console.log(error);
    });
  }

  SendAnswer() {
    this.ans = new Answer();
    this.ans.body = this.myForm.value.answer;
    const url = 'https://localhost:5001/api/question/' + this.idQuestion + '/answer';
    this.http.post<Answer>(url, this.ans).subscribe(response => {
      this.ans = response;
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

}
