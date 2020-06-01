import { Component, OnInit } from '@angular/core';

// Service
import { TopicService, TopicWithUrl } from '../topic.service'

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})

export class TopicListComponent implements OnInit {
  topics: TopicWithUrl[];

  constructor(private topicApi: TopicService) { }
  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
    this.topicApi.getTopics().subscribe(
      topics => this.topics = topics.map(
        topic => ({
          url: this.getUrl(topic.isLeaf, topic.id),
          ...topic
        })
      )
    )
  }

  getUrl(isLeaf: boolean, id: number): string {
    return isLeaf ? `questions/${id}` : `topics/${id}`;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;
  }

}
