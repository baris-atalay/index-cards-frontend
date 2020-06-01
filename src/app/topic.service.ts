import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Topic {
  id: number;
  title: string;
  isLeaf: boolean;
}

export interface TopicWithUrl {
  id: number;
  title: string;
  isLeaf: boolean;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopics(id: number = null) {
    const url = id
      ? `assets/mock/topics.${id}.json`
      : `assets/mock/topics.json`;

    return this.http.get<Topic[]>(url);

  }
}
