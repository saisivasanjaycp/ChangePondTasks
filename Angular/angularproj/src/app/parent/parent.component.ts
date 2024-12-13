import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone:true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  childData:any;
  parentData:any;
  
  sendData(val:string){
    // console.log(val)
    this.parentData=val;
  }
}
