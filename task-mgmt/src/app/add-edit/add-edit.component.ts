import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [''],
      description: [''],
      id: [''],
    });
  }

  onSubmit() {
    let data: any = [];
    this.form.patchValue({
      id: new Date().getTime()
    })
    if (this.taskService.getTaskList().length > 0) {
      data = this.taskService.getTaskList();
      data.push(this.form.value)
    } else {
      data.push(this.form.value)
    }
    this.taskService.saveTask(data);
    this.router.navigate(['/task-list'])
  }

  back() {
    this.router.navigate(['/task-list'])

  }

}
