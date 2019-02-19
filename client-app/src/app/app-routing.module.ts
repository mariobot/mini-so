import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestanswerComponent } from './questanswer/questanswer.component';

const routes: Routes = [
  { path: 'questanswer/:id', component: QuestanswerComponent },
  { path: 'question', component: QuestionComponent },
  {
    path: '',
    redirectTo: 'question',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
