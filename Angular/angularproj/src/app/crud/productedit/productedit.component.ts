import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-productedit',
  imports: [FormsModule],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
  id:any;
  prodData:any;
  constructor(private _actRoute:ActivatedRoute,private _dbObj:DbserviceService,private _router:Router){}

  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      // console.log(param);
      this.id=param.id;
      this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        // console.log(res);
        this.prodData={...res}
      })    
    })
  }

  addData(val:any){
    this._dbObj.updateRecord("products",this.id,val).subscribe(()=>{
      window.alert("Product Edited successfully");
      this._router.navigate(["/maindashboard/productdash"])

    })
  }

}
