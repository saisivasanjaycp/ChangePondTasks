import { Component } from '@angular/core';

@Component({
  selector: 'app-multipleimage',
  templateUrl: './multipleimage.component.html',
  styleUrls: ['./multipleimage.component.css']
})
export class MultipleimageComponent {

  images: { path: string; name: string }[] = [
    { path: '/Images/Mcqueen.jpg', name: 'McQueen' },
    { path: '/Images/Ferrari.jpg', name: 'Ferrari' },
    { path: '/Images/redbull.jpg', name: 'Red Bull' }
  ];

  selectedImageIndex: number = 0;

  
  showImage(index: number): void {
    this.selectedImageIndex = index;
  }
}
