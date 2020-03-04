import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserService} from "../../../_services";
import {UserRequestDto} from "../../../dto";
import {EmailDto} from "../../../dto/EmailDto";
import {RoleDto} from "../../../dto/RoleDto";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Observable, pipe} from "rxjs";
import {delayResponse} from "angular-in-memory-web-api/delay-response";
import {first} from "rxjs/operators";
import {error} from "util";


@Component({
  selector: 'app-users-list',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users : UserRequestDto[] ;
  blocK_checked : boolean = false ;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  public displayedColumns = ['nom', 'mail', 'role', 'details', 'block'
  ];
  public dataSource = new MatTableDataSource<UserRequestDto>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  public getAllUsers = () => {
    /*this.userService.getData('api/owner')
      .subscribe(res => {
        this.dataSource.data = res as Owner[];
      })*/
   this.userService.getAll().subscribe( users => {
      console.log(users)
    // let tabusers = JSON.parse(JSON.stringify(users.toString()))
     this.dataSource.data = users as UserRequestDto[]
    });

    // console.log("yes "+this.users)
  }

  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (element: UserRequestDto) => {
    let obj = JSON.parse(JSON.stringify(element))
    console.log(obj.account.enabled)
      if(element.account.enabled === false){
        this.blocK_checked = true;

        console.log(this.blocK_checked)
      }else{
        this.blocK_checked = false;
        console.log(this.blocK_checked)

      }
    this.userService.block(element, this.blocK_checked).subscribe();

  }



}
