import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

// All Routes Module
import { AppRoutingModule } from './app-routing.module';

// All Material Modules
import { MaterialModule } from './material/material.module';

// Serivces
import { TopicService } from './topic.service'
import { QuestionService } from './question.service';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


// function that returns `MarkedOptions` with renderer override
function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.checkbox = (checked) => {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'type="checkbox"'
      + '> ';
  };
  console.log(renderer);

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopicListComponent,
    QuestionListComponent,
    QuestionDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  providers: [TopicService, QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
