import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';
import { Tasks } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  tasks: Tasks[] = [];

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.taskservice.getTasklist()
    .subscribe((data: Tasks[]) => {
        this.tasks =data;
       },
      error => console.log('ERROR: ' + error));
    }
  
    deleteTodo(index){
      this.taskservice.deleteTask(index)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));

    }
  
  
  }
