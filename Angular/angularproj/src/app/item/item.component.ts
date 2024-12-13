import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemservicesService } from '../shared/services/itemservices.service';
import { commonImgPath } from '../shared/constant/constantData';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  itemObj=new ItemservicesService()
  myitems:any[]=[
    {name:"AttackonTitan",price:399,description:"Freedom of pardis Island",imgPath:commonImgPath.Aot},
    {name:"DemonSlayer",price:599,description:"Demon hunters killing demon king",imgPath:commonImgPath.ds},
    {name:"Jujutsu kaisen",price:399,description:"Resurrection of king of curse",imgPath:commonImgPath.jjk},
    {name:"Naruto",price:399,description:"Hokage path",imgPath:commonImgPath.naruto}
  ]

}
