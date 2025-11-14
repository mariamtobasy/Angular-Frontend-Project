import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/pages/home/home';
import { Login } from './app/pages/login/login';
import { Register } from './app/pages/register/register';
import { App } from './app/app';
import { Component } from '@angular/core';
import { provideRouter,Routes } from '@angular/router';
import { About } from './app/pages/about/about';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserDetail } from './app/pages/user-detail/user-detail';
import { Contact } from './app/pages/contact/contact';
import { TaskList } from './app/task/task-list/task-list';

//mybe i need to remove const
const routes: Routes =[
{ path: '', redirectTo: 'home', pathMatch: 'full' }, 
 // default route
 //URL = http://localhost:4200/ → matches ''.
//So this route triggers when the user first opens the app without any path.
  { path: 'home', component: Home },  
  {path:'register',component:Register},
  {path:'login',component:Login},
   // Dynamic route with parameter
 // { path: 'home/:id', component: Home },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {path:'about',component:About},
 { path: 'users/:id', component:UserDetail },
 {path: 'contact', component: Contact },
 {path:'task-list',component:TaskList},
];
bootstrapApplication(App,{
   providers: [provideRouter(routes),importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));



/**sumary : provideRouter,Routes:
 * provideRouter:is a function that register routes in angular system
 * Routes is a ts type so when i create the array the type of it is Routes
 */