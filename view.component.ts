import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemLibService } from '../item-lib.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  productmodel:Items[]=[]

  constructor(private Items:ItemLibService,private routea:ActivatedRoute) { }

  ngOnInit(): void {
    this.routea.params.subscribe(params=>{
      if(params['searchproduct']){
      this.productmodel=this.Items.productdetails().filter((productmodel: { 
     Category: any; })=>productmodel.Category==params['searchproduct']);
     }else{
      this.productmodel=this.Items.productdetails()
     }
     })
  }

}
