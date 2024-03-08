import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top-selling-item',
  templateUrl: './top-selling-item.component.html',
  styleUrls: ['./top-selling-item.component.css']
})
export class TopSellingItemComponent implements OnInit {

  loadTopSellingItemTable=false;
  prouctList:any=[];
  dataSource:any;
  displayedColumns: string[] = [
    'productName',
    'price',
    'quantity',
    'purchaseDate'
  ];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.topTenSellingItemByPrice().subscribe(resp=> {
      this.prouctList=resp;
      this.dataSource=this.prouctList;
      this.loadTopSellingItemTable=true;
    });
  }

}
