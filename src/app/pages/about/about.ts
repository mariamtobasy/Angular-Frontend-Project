import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Master } from '../../services/master';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone:true,
})
export class About  {

  users:any[]=[];
 
constructor(private master: Master) {
  this.master.getUsers().subscribe(data => this.users = data);
} 
}


    
  

/**we used ngOnit:
 * It runs once automatically when the component is created.
*Standard place to initialize data, like fetching API results.
this.masterService.getUsers()
*Calls your service method that uses HttpClient.get(). 
*Returns an Observable (a stream of data that arrives asynchronously).
*subscribe tells Angular: “Start this request and run this function when the data arrives.”
(data: any) => { this.users = data; } → Once the API returns, the users array is filled with the results.
*/
