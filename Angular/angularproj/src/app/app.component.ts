import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ToggleimageComponent } from './toggleimage/toggleimage.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultipleimageComponent } from './multipleimage/multipleimage.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DataBindingComponent,DirectiveComponent,ToggleimageComponent,MultipleimageComponent,ParentComponent,ChildComponent,PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproj';
}
