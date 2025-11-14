import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


export type Task ={
  id:number,
  title:string,
  completed:boolean,
}


@Injectable({
  providedIn: 'root'
})

  export class TaskService {
  constructor(private http: HttpClient) {}
  getTask() {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
  }
}


