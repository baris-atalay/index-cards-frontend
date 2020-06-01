import { Component, OnInit } from '@angular/core';

// Service
import { QuestionService, QuestionWithUrl } from '../question.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(private questionApi: QuestionService) { }
  breakpoint: number;
  questions: QuestionWithUrl[];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
    this.questionApi.getQuestions(1).subscribe(
      questions => this.questions = questions.map(
        question => ({
          url: this.getUrl(question.id),
          ...question
        })
      )
    )
  }

  getUrl(id: number): string {
    return `detail/${id}`;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;
  }

}
