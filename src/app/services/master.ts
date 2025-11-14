import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type User= {
   id: number,
  name: string;
  username:string,
  password?:string,
  email:string,
  phone?:string,
  website?:string,
}
//export so i can use it in another place
@Injectable({
  providedIn: 'root'
})


export class Master {

/**constructor(...) {} → This runs when the service is created.
private http: HttpClient → This is Dependency Injection. */
constructor(private http: HttpClient){}

/**getUsers(): Observable<User[]>
What it does: Fetches a list of users from the API https://jsonplaceholder.typicode.com/users.
Return type: Observable<User[]>
An Observable is like a stream of data.
It doesn’t immediately contain the data. You subscribe to it to get the actual values. */
 getUsers():Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

//the piont of the return type and observable written the getUsers as a return type
  private users: User[] = []; 
  //we used private cuz:Encapsulation — We don’t want other parts of the app directly changing the array.
 
  registerUser(user:User){
     this.users.push(user);
 }

 loginUser(username:string,password:string):boolean{
  const found=this.users.find(
    u=>u.username===username&&u.password===password);
    return !!found;

//The u is just a variable name representing each user when you look through the users array.
  
 }
}

/**They work together like this:
registerUser(user) adds users to the array.
loginUser(username, password) searches the array for a matching user.
getUsers() lets you retrieve all registered users if neede */

