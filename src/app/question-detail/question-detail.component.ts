import { Component, OnInit } from '@angular/core';

// Service
import { QuestionService, Question } from '../question.service'

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private questionApi: QuestionService) { }
  question: Question;

  ngOnInit() {
    this.questionApi.getQuestionDetail(1).subscribe(
      question => this.question = question
    )
    console.log(this.question);
  }

}
