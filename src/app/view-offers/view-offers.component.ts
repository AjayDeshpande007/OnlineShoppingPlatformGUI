import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-offers',
  templateUrl: './view-offers.component.html',
  styleUrls: ['./view-offers.component.css']
})
export class ViewOffersComponent implements OnInit {

  loadProductOfferTable=false;
  prouctOfferList:any;
  dataSource:any;
  displayedColumns: string[] = [
    'productName',
    'productPrice',
    'productOffer'
  ];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.viewOffers().subscribe(resp=>{
      this.prouctOfferList=resp;
      debugger;
      this.dataSource=this.prouctOfferList;
      this.loadProductOfferTable=true;
    }) 
  }

}
