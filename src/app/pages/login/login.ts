import { Component, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true

})
export class Login implements OnInit{
    loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private master: Master) {}

  //If you want to use Master inside your component, you must inject it via the constructor 
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],  
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const success = this.master.loginUser(username, password);
      if (success) {
        alert('Login successful!');
      } else {
        alert('Invalid username or password.');
      }
    }
  }
 clearForm() {
  this.loginForm.reset();
}


}