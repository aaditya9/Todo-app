import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Tasks } from '../task';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  tasks: Tasks = new Tasks();
  submitted = false;
  result:any;
  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
  }

  newTask(): void {
    this.submitted = false;
    this.tasks = new Tasks();
  }

  save() {
    this.TaskService.createTask(this.tasks)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          this.result=data;
        },
        error => console.log(error));
    this.tasks = new Tasks();
  }

  onSubmit() {
    this.save();
  }

}
