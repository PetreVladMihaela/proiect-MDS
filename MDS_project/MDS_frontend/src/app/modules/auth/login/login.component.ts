import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/user-services/users.service';

// acest modul este folosit pentru a deschide un dialog modal (fereastra modala) pentru login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  public pageTitle: string = "Login with Email"
  public otherField: string = "username"
  public changeLogin: string = "Login with Username"
  public loginWithEmail: boolean = true

  public hideWarning: boolean = true
  public warning: string = ""

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private usersService: UsersService,
    private router: Router
  ) { }

  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }

  get username(): AbstractControl {
    return this.loginForm.get('username')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  public login(): void {
    if (this.pageTitle == "Login with Email") {
      if (this.loginForm.value.email) {
        this.usersService.getUserByEmail(this.loginForm.value.email).subscribe((result: User) => {
          this.checkLogin("email", result)
        });
      }
    } else {
      if (this.loginForm.value.username) {
        this.usersService.getUserByUsername(this.loginForm.value.username).subscribe((result: User) => {
          this.checkLogin("username", result)
        });
      }
    }
  }

  public checkLogin(field: String, result: User) {
    if(!result) { //nu s-a gasit in baza de date
      this.router.navigate(['/auth']);
      this.warning = "Incorrect " + field + "!"
      this.hideWarning = false;
    }
    else if (this.loginForm.value.password != result.password) {
      this.router.navigate(['/auth']);
      this.warning = "Incorrect password!"
      this.hideWarning = false;
    }
    else {
      localStorage.setItem('User', result.username);
      localStorage.setItem('Password', result.password);
      localStorage.setItem('Role', 'User');
      this.router.navigate(['/user', result.username]);
      this.closeDialog();
    }
  }

  public changeLoginMethod() {
    if (this.pageTitle == "Login with Email") {
      this.pageTitle = "Login with Username"
      this.otherField = "email"
      this.changeLogin = "Login with Email"
      this.loginWithEmail = false
    }
    else {
      this.pageTitle = "Login with Email"
      this.otherField = "username"
      this.changeLogin = "Login with Username"
      this.loginWithEmail = true
    }
  }

  ngOnInit(): void {
  }

}
