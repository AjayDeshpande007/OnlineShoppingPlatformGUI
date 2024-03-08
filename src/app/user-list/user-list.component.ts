import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  loadProductTable=false;
  categoryList:any=[];
  productCategory:any;
  userList:any=[];
  dataSource:any;
  displayedColumns: string[] = [
    'name',
    'role',
    'email',
    'address',
    'isEnabled'
  ];

  ngOnInit(): void {
  //  this.dataSource=new MatTableDataSource(this.prouctList);
    this.adminService.getUserList().subscribe(resp=>{
      this.userList=resp;
      this.dataSource=new MatTableDataSource(this.userList);
      this.loadProductTable=true;
      });
  }

  enableDisableUser(id:any) {
    
  }

}
