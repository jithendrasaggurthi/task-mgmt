import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTaskList(){
   return JSON.parse(localStorage.getItem('taskList') || '{}')
  }

  saveTask(task:any){
    localStorage.setItem('taskList',JSON.stringify(task))
  }

}
