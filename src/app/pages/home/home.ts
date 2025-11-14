import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//ActivatedRoute Gives access to route parameters.
import { ActivatedRoute } from '@angular/router';
//RouterModule → allows you to use routerLink in this component (for links) and handle navigation.
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true,
  
})

export class Home {
 
 // homeId='';
    
  //   constructor(private route: ActivatedRoute) {
  //  this.homeId = this.route.snapshot.paramMap.get('id') || '';
//  }
}
