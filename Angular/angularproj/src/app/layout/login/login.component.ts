import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uid:any;
  upass:any;
  userData:any;

  constructor(private _dbServ:DbserviceService,private _router:Router){}

  checkUser(){
    
    this._dbServ.getRecord("users").subscribe((res)=>{
      this.userData = res;
      const currentUser = this.userData.filter((val:any,index:any)=>{
        return val.userId===this.uid && val.userpass===this.upass
      });

      if(currentUser.length>0){
        sessionStorage.setItem("user",this.uid);
        window.alert("Login Successfully");
        this._router.navigate(['/maindashboard'])
      }
      else{
        window.alert("Wrong Credential");
        this.uid="";
        this.upass="";
      }

    })
    
  }

}
