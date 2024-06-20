import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { ConfirmacionuserComponent } from '../confirmacionuser/confirmacionuser.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  editDialog(element: User) {
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: element,

    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog was closed');
      if (result) {
        this.userListMethod();
      }
    });
  }
  openDialog() {
const dialogRef = this.dialog.open(RegisterComponent, {
  data: null,
});

dialogRef.afterClosed().subscribe((result:any) => {
console.log('Dialog was closed');
if (result){
  this.userListMethod();
}
})
  }
  delete(id: string) {
    const dialogRef = this.dialog.open(ConfirmacionuserComponent, {
      data: null,
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
     if(result){
      
      this.deleteProduct1(id)
      
     }
    });
  }
  deleteProduct1(id: string) {
    try {
      this.userService
        .deleteUser(id)
        .subscribe(item => console.log(item));
      this.userListMethod();
      
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.userListMethod();
  }
  userListMethod() {
    try {
      this.userService
        .getUsers().subscribe(
          (item: User[] | undefined) =>
            (this.userList = new MatTableDataSource(item))
        )
    } catch (error) {

    }
  }
  userList!: MatTableDataSource<User>;
  columnsHeader = ['username', 'name', 'email', 'phone', 'role', 'opciones'];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.userList.filter = filterValue.trim();
  }
}
