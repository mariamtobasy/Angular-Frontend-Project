import { Component } from '@angular/core';
import { TaskService} from '../../services/taskService';
import { Task } from '../../services/taskService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
   standalone:true,
  selector: 'app-task-list',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
 
})
export class TaskList {

tasks : Task[]=[];

 constructor(private taskService: TaskService) {
  this.taskService.getTask().subscribe(data => {
        console.log('API Data:', data);   // 👈 check if data arrives

    this.tasks = data;
  });
}

}





/**this.taskService.getTasks().subscribe(data => {
  this.tasks = data;
});
 */