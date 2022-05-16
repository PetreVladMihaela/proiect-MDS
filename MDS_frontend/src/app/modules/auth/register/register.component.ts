import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { User } from 'src/app/interfaces/user';
import { CustomValidators } from 'src/app/custom-validators';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { UserProfilesService } from 'src/app/services/user-profiles.service';
import { UserAddress } from 'src/app/interfaces/user-address';
import { UserAddressesService } from 'src/app/services/user-addresses.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private userProfilesService: UserProfilesService,
    private userAddressesService: UserAddressesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  public registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('Generic'),
    lastname: new FormControl('User'), 
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required,  Validators.maxLength(30), 
        CustomValidators.forbiddenCharValidator(/[^\w]/)]) //CustomValidators.usernameValidator(this.usersService)
  });

  public usernameExists: boolean = false;
  public emailExists: boolean = false;

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

  ngOnInit(): void { // asta se executa prima - de cate ori este accesata componenta
    //localStorage.setItem('Role', 'Unknown'); // <- daca dam logout Role nu mai trebuie sa fie 'User'
  }

  public register(): void {
    //console.log(this.registerForm.value)

    const newUser: User = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      username: this.registerForm.value.username,
    }

    const newProfile: UserProfile = {
      email: this.registerForm.value.email,
      firstName: this.registerForm.value.firstname,
      lastName: this.registerForm.value.lastname,
      owner: newUser
    }

    const newAddress: UserAddress = {
      email: this.registerForm.value.email
    }
    
    this.usersService.createUser(newUser).subscribe(() => {
      this.userProfilesService.createUserProfile(newProfile).subscribe(() => {
        this.userAddressesService.createUserAddress(newAddress).subscribe(() => {
          localStorage.setItem('Role', 'User');
          localStorage.setItem('User', newUser.password);
          this.router.navigate(['/user', newUser.username]);
        })
      })
    });
  }

  public openLoginForm(): void { // deschide si configureza ferastra modala de login
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '550px';
    dialogConfig.height = '550px';
    dialogConfig.disableClose = true; // nu se mai inchide dialogul daca dam clic in afara
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => { // Daca inchidem fereastra prin butonul de cancel, 
                                              //      auth guard nu ne permite sa trecem de pagina de register
                                              // altfel suntem redirectionati catre pagina userului
      //this.router.navigate(['/user', this.registerForm.value.username]);
    });
  }

  public onFocusOut(): void{
    const usernameField: string = this.registerForm.value.username
    const emailField: string = this.registerForm.value.email
    if(usernameField) {
      this.usersService.checkIfUsernameExists(usernameField).subscribe((exists) => {
        if(exists) {
          this.usernameExists = true
        }
        else {
          this.usernameExists = false
        }
      })
    }
    if(emailField) {
      this.usersService.checkIfEmailExists(emailField).subscribe((exists) => {
        if(exists) {
          this.emailExists = true
        }
        else {
          this.emailExists = false
        }
      })
    }
    // const emailField: string = this.registerForm.value.email
    // const passwordField: string = this.registerForm.value.password
    // const usernameField: string = this.registerForm.value.username
    // let correct: boolean = false
    // if (emailField && passwordField && usernameField) {
    //   if (passwordField.length >= 5 && passwordField.length <= 20) {
    //     if (usernameField.length <= 30 && /^\w+$/.test(usernameField)) {
    //       this.disableRegisterButton = false
    //       correct = true
    //     }
    //   }
    // }
    // if(!correct) {
    //   this.disableRegisterButton = true
    // }
  }

}
