
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Master } from '../../services/master'; 
import { User } from '../../services/master'; 
//after i make sure i used export i need to import user where i wanna use it 
import { CommonModule } from '@angular/common';  // <-- this includes NgIf, NgFor, and others


@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone:true
})

export class Register {
welcomeMessage='';
username='';
email='';
password='';

//this is Angular’s Dependency Injection at work:
constructor(private master: Master){}

ngOnInit(): void {
  this.welcomeMessage='Welcome to the registration page!';
  console.log("User initialized!")
  //just for debugging
}

onRegister(form:NgForm){
   if(form.valid){
 const newUser: User = {
  id: this.master.getUsers.length + 1, // or any unique id
  name: this.username,              
  username: this.username,
  password: this.password,
  email: this.email
};

this.master.registerUser(newUser);
//Take the data from the form fields,
//  put it together in a User object, and
//  send it to the service.
alert('Registration successful!');
   }
  }
  clearForm() {
  this.username = '';
  this.email = '';
  this.password = '';
}

 passValidation(password:string){
  //if (!field.touched) return null;
   if(!password)return 'password is required'

   if(password.length<7)
   {return 'password needs to be at least 7 chracters'}
  //the third \* This allows the symbol to appear anywhere in the string, not just at the start.
   const pattern = /^(?=.*[A-Z])(?=(?:.*\d){3,})(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.<>/?~-]).+$/;

       if(!pattern.test(password))
            return 'Password must have 1 uppercase, 1 symbol, and at least 3 numbers.';
    return null;
 }

 passValidationEmail(email: string): string | null {
  if (!email) return 'Email is required';

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//second group .- litral . and litral -
  if (!pattern.test(email)) return 'Email format is invalid';
  
  return null; 
}


 }


