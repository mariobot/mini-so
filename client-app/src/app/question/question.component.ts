import { Question } from './../_models/Question';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  Questions: Question[];
  qst: Question;
  template: TemplateRef<any>;
  public modalRef: BsModalRef;
  myForm: FormGroup;

  constructor(private http: HttpClient, private modalService: BsModalService,  private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      title: '',
      question: ''
    });
  }

  ngOnInit() {
    this.http.get<Question[]>('https://localhost:5001/api/question').subscribe(response => {
      this.Questions = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public submitForm() {
    this.qst = new Question();
    this.qst.title = this.myForm.value.title;
    this.qst.body = this.myForm.value.question;
    this.http.post<Question>('https://localhost:5001/api/question', this.qst).subscribe(response => {
      this.qst = response;
      this.ngOnInit();
      this.modalRef.hide();
    }, error => {
      console.log(error);
    });
  }

  public onUpvote(id) {
    const url =  'https://localhost:5001/api/question/' + id + '/upvote';
    this.http.patch(url, null).subscribe(response => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

  public onDownvote(id) {
    const url =  'https://localhost:5001/api/question/' + id + '/downvote';
    this.http.patch(url, null).subscribe(response => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
