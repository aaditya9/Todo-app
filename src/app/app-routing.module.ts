import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  { path:'',redirectTo:'task',pathMatch:'full'},
  { path: 'task', component: TaskListComponent },
  { path: 'create-task', component: CreateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
