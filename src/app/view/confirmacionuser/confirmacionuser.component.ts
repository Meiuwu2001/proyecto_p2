import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-confirmacionuser',
  templateUrl: './confirmacionuser.component.html',
  styleUrl: './confirmacionuser.component.scss'
})
export class ConfirmacionuserComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

  }
  ngOnInit(): void {
  }
}
