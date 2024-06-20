import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    if (!this.data){
      this.formGroup = this.formBuilder.group({
        username: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        role: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }else {
      this.formGroup = this.formBuilder.group({
        username: [this.data.username || '', Validators.required],
        name: [this.data.name || '', Validators.required],
        email: [this.data.email || '', [Validators.required, Validators.email]],
        phone: [this.data.phone || '', Validators.required],
        role: [this.data.role || '', Validators.required],
        password: [this.data.password || '', [Validators.required, Validators.minLength(6)]]
      })
    }
  }

  save():void {
    let request ={
      id:this.data!=null?this.data._id:null,
      username:this.formGroup.value.username,
      name:this.formGroup.value.name,
      email:this.formGroup.value.email,
      phone:this.formGroup.value.phone,
      role:this.formGroup.value.role,
      password:this.formGroup.value.password,
    }
   console.log(request);

   try {
    if(!this.data){
      this.userService.addUser(request).subscribe(item=>console.log(item)
      )
    }
    else{
      this.userService.editUser(request).subscribe(item => console.log(item))
    }
    this.dialogRef.close(true);
   } catch (error) {
    console.log(error);
    
   }
   
  }
}
