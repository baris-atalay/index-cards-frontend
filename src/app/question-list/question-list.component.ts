import { Component, OnInit } from '@angular/core';

// Service
import { QuestionService, QuestionWithUrl } from '../question.service'

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(250px)', opacity: 0 }),
        animate('500ms ease-out')
      ]),
      transition(':leave', [
        animate(1000, style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
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
