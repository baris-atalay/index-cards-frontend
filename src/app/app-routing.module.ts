import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { QuestionListComponent } from './question-list/question-list.component'
import { QuestionDetailComponent } from './question-detail/question-detail.component'

const routes: Routes = [
  { path: '', component: TopicListComponent },
  { path: 'topics/:id', component: TopicListComponent },
  { path: 'questions/:id', component: QuestionListComponent},
  { path: 'questions/:id/detail/:id', component: QuestionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
