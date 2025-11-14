//CommonModule – gives us access to directives like *ngIf, *ngFor
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
//ActivatedRoute – lets us read data(parameters) from the URL (like /users/3 → id = 3).
import { ActivatedRoute } from '@angular/router';
import { Master, User } from '../../services/master';
//That User isn’t some magic Angular thing — it’s just a TypeScript type (or interface) that you (or your code) defined inside the service file.


@Component({
  selector: 'app-user-detail',
  imports: [CommonModule,HttpClientJsonpModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
  standalone:true
})
export class UserDetail {
//var user stores the data of the user based on the type user, befor fetching the data it's undefined
/**How it connects to the template
<h2>{{ user?.name }}</h2>
<p>Email: {{ user?.email }}</p> */
  user: User|undefined;

   constructor(
    //private route: ActivatedRoute → lets you read data from the current URL.
   //private master: Master → gives you access to your service that fetches users.
   //those should be in the constructor that wants to subscribe and the subscribe in the component i wanna show the data in 
    private route: ActivatedRoute,
    private master: Master
  ) {let id = Number(this.route.snapshot.paramMap.get('id'));
    //subscribe is a method that belongs to an Observable in Angular
    this.master.getUsers().subscribe(users => {
      this.user = users.find(u => u.id === id);
    });
  }
/**Get the id from the URL → /users/3 → id = 3.
Call this.master.getUsers() → fetch all users from API/service.
.subscribe(...) → wait until the users are fetched.
.find(u => u.id === id) → pick the one user whose id matches.
Store it inside this.user. */
 
/**getUsers():Observable<User[]>{}

why using a return type here ?
okay I will explain what this return type means 1st :
Observable is a tool that delivers data later and in my 
case the data is the array of users from the API link, generally
it's not mandatory to put the return type in ts -cuz ts can know -it's just safer
clearer if someone wanna read my code.

the second part to complete this process is subscribe :
without it nothing happens ,Observable can't fetch the data alone
,so subscribe receives and uses the data from the observable , when i 
subscribe the data arrives . */
}
