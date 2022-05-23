import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './user.interface';
import { MatTable } from '@angular/material/table';


export interface UserListElement {
  name: string;
  position: number;
  edad: number;
  email: string;
  user: string;
}

const ELEMENT_DATA: UserListElement[] = [
  {position: 1, name: 'Hydrogen', edad: 11, email: 'ser@false.com', user: 'sergh'},
  {position: 2, name: 'Helium', edad: 40, email: 'Helium@no.com', user: 'heyiun'},
  {position: 3, name: 'Lithium',  edad: 63, email: 'Litium@sim.com', user: 'litiu'},
];


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {
  @Input() users: Usuario[]; //se recibe data
  displayedColumns: string[] = ['position', 'name', 'edad', 'email','user'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable) table: MatTable<UserListElement>;

  constructor() { }

  ngOnInit(): void {
  }
  refresh(){
    this.table.renderRows();
  }

}
