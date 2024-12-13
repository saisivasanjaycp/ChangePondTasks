import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  myName:string="Sanjay";
  myImg:string="./Images/Mcqueen.jpg";
  imgalt:string="Mcqueen";

  inputData:string="samosa";

  greeting(val:string){
   window.alert(`Good Morning ${val}`);
  }
  
}
