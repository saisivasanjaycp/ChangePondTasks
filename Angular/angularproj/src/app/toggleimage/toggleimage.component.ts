import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimage',
  imports: [],
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleimageComponent {
  images: { path: string; name: string }[] = [
    { path: './Images/Mcqueen.jpg', name: 'McQueen' },
    { path: './Images/Ferrari.jpg', name: 'Ferrari' },
    { path: './Images/redbull.jpg', name: 'Red Bull' }
  ];



 imgIndex: number = 0;
 toggleImage(): void {
  if (this.imgIndex < this.images.length - 1) {
    this.imgIndex++;
  } else {
    this.imgIndex = 0;
  }
}

  
 


}
