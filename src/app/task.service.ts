import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tasks } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

 
  // this function will call a function which  creates a task in backend drf.
  createTask(task: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/task-create/`, task);
  }
 
 
  // this function will call a function which  delete a task in backend drf.
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/task-delete/${id}`);
  }
  
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

  // we receive all tasks from drf.
  getTasklist(): Observable<Tasks[]> {
    console.log('In getTasklist');
    return this.http.get<Tasks[]>(`${this.baseUrl}/task-list/`)
    .pipe(
      catchError(this.errorHandler)
    );
    
  }
 
  
}
