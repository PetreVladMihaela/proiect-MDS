import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('Generic'),
    lastname: new FormControl('User'),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  });

  constructor(
    private usersService: UsersService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  // getters
  get firstname(): AbstractControl {
    return this.registerForm.get('firstname')!;
  }
  get lastname(): AbstractControl {
    return this.registerForm.get('lastname')!;
  }
  get email(): AbstractControl {
    return this.registerForm.get('email')!;
  }
  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }
  get username(): AbstractControl {
    return this.registerForm.get('username')!;
  }

  public register(): void {
    console.log(this.registerForm.value)

    const newUser: User = {
      email: this.registerForm.value.email,
      password:  this.registerForm.value.password,
      username: this.registerForm.value.username,
    }
    
    this.usersService.createUser(newUser).subscribe(() => {
      localStorage.setItem('Role', 'User');
      this.router.navigate(['/user']);
    });
  }

  public openLoginForm(): void { // deschide si configureza ferastra modala de login
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '600px';
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => { // Daca inchidem fereastra prin butonul de cancel, 
                                              //      auth guard nu ne permite sa trecem de pagina de register
                                              // altfel suntem redirectionati catre pagina userului
      this.router.navigate(['/user']);
    });
  }

  ngOnInit(): void { // asta se executa prima - de cate ori este accesata componenta
    localStorage.setItem('Role', 'Unknown'); // <- daca dam logout Role nu mai trebuie sa fie 'User'
  }

}
