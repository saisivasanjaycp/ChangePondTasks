import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CubePipe } from '../shared/customPipe/cube.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,CubePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
 msg:string="Welcome to pipe component";
 emp={id:11,name:'sanjay',salary:85000,address:'chennai'};
 dateObj= new Date();

}

