import { Injectable } from '@angular/core';
import { Items } from './items';
@Injectable({
  providedIn: 'root'
})
export class ItemLibService {

  constructor() { }
  productdetails():Items[]{
    return[{
      Category:"Bags",
      Category_img:"/assets/bags.jpg",
      name:"Handbag",
      image:"/assets/handbag.jfif"
    },{
      Category:"Bags",
      Category_img:"/assets/bags.jpg",
      name:"Slingbag",
      image:"/assets/slingbag.jpg"
    },
    {
      Category:"Nuts",
      Category_img:"/assets/nuts.jpg",
      name:"Cashew",
      image:"/assets/cashew.jpg"
    },
    {
      Category:"Nuts",
      Category_img:"/assets/nuts.jpg",
      name:"Almond",
      image:"/assets/almond.jpg"
    },
    {
      Category:"Grains",
      Category_img:"/assets/grains.jpg",
      name:"Rice",
      image:"/assets/rice.jpg"
    }
  ]
    }
}
