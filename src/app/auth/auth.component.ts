import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-auth',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loginForm = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  registrationForm = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<AuthComponent>) {
  }
}
