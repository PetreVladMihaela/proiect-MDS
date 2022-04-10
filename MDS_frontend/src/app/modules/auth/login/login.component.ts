import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

// acest modul este folosit pentru a deschide un dialog modal (fereastra modala) pentru login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email_or_username: new FormControl('') // de terminat
  });

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private usersService: UsersService
  ) { }

  get email_or_username(): AbstractControl {
    return this.loginForm.get('email_or_username')!;
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  public login(): void { // se face cu get
  }

  ngOnInit(): void {
  }

}
