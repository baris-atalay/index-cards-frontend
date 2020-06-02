import { Component, OnInit } from '@angular/core';

// Service
import { QuestionService, Question } from '../question.service'

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
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
    ]),
    trigger('toggleSolution', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(250px)', opacity: 0 }),
        animate('500ms ease-out')
      ]),
    ])
  ]
})
export class QuestionDetailComponent implements OnInit {

  constructor(private questionApi: QuestionService) { }
  question: Question;
  show: false;

  ngOnInit() {
    this.questionApi.getQuestionDetail(1).subscribe(
      question => this.question = question
    )
    console.log(this.question);
  }

  showSolution(toggleSoltion) {
    this.show = toggleSoltion;
    console.log(this.show)
  }

}
