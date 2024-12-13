import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private _route:Router){}

  logOut(){
    if(window.confirm("You sure want to Logout?")){
        sessionStorage.clear();
        this._route.navigate(["/login"])
    }
    else{
      this._route.navigate(["/maindashboard"])
    }
  }
}
