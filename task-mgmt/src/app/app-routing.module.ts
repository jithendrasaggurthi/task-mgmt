import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [{path:'task-list',component:TaskListComponent},
{path:'',component:TaskListComponent},
{path:'add-edit',component:AddEditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
