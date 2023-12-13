import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasklist:any= [];
constructor(private router:Router,private taskService:TaskService){
this.tasklist = this.taskService.getTaskList()
}

complete(task:any){
task.status = 'completed';
this.taskService.saveTask(this.tasklist)
}


editTask(task:any){
  this.router.navigate(['/add-edit'],{queryParams:task})
}

openAddOrEdit(){
  this.router.navigate(['/add-edit'])
}
}
