import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';


// acest modul este folosit pentru a deschide un dialog modal (fereastra modala) pentru login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''), // de terminat
    password: new FormControl('')
  });

  public hideWarning: boolean = true

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private usersService: UsersService,
    private router: Router
  ) { }

  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }
  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  
  public login(): void {
    this.usersService.getUserByEmail(this.loginForm.value.email).subscribe((result: User) => {
      if(!result) { //nu s-a gasit in baza de date
        this.router.navigate(['/auth']);
        this.hideWarning = false;
      }
      else if (this.loginForm.value.password != result.password) {
        this.router.navigate(['/auth']);
        this.hideWarning = false;
      }
      else {
        localStorage.setItem('User', result.password);
        localStorage.setItem('Role', 'User');
        this.router.navigate(['/user', this.loginForm.value.email]);
        this.closeDialog();
      }
    }); //visitor->user / sa def variabila hide warning / sa def 

  }
  ngOnInit(): void {
    localStorage.setItem('Role', 'Unknown'); //info cand nu esti logat 
  }

}


