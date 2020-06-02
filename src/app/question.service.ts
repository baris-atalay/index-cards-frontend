import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Question {
  id: number;
  type: string;
  title: string;
  description: string;
  answer: string;
}

export interface QuestionWithUrl {
  id: number;
  type: string;
  title: string;
  description: string;
  answer: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(id: number) {
    const url = `assets/mock/questions.${id}.json`

    return this.http.get<Question[]>(url);

  }
  getQuestionDetail(id: number) {
    const url = `assets/mock/card.${id}.json`

    return this.http.get<Question>(url);

  }
}
