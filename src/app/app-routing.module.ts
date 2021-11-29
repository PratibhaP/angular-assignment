import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStduentComponent } from './add-stduent/add-stduent.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'add-student', component: AddStduentComponent },
  { path: 'students', component: StudentsComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
