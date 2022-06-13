import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { CustomValidators } from 'src/app/custom-validators';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/user-services/users.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit, OnDestroy{

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private sub: Subscription = new Subscription;

  public user?: User = {
    userId: 0,
    email: "",
    password: "",
    username: ""
  }

  public usernameExists: boolean = false;
  public emailExists: boolean = false;
  public editInfo: boolean = false;
  public buttonText: string = "Edit Info";

  public changeInfoForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required,  Validators.maxLength(30), 
        CustomValidators.forbiddenCharValidator(/[^\w]/)]) //CustomValidators.usernameValidator(this.usersService)
  });

  get email(): AbstractControl {
    return this.changeInfoForm.get('email')!;
  }
  get password(): AbstractControl {
    return this.changeInfoForm.get('password')!;
  }
  get username(): AbstractControl {
    return this.changeInfoForm.get('username')!;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.usersService.getUserByUsername(params['username']).subscribe((user:User) => {
        const username = localStorage.getItem('User');
        const password = localStorage.getItem('Password');
        if(username==user.username && password==user.password) { 
          this.user = user
          this.changeInfoForm.patchValue(user);
        }
        else 
        this.router.navigate(['/user', username]);
      });
    });
  }

  public editAccountInfo() {
    if (this.editInfo) {
      this.editInfo = false;
      this.buttonText = "Edit Info"
    }
    else {
      this.editInfo = true;
      this.buttonText = "Hide Edit Info"
    }
  }

  public saveInfo(): void {
    this.usersService.updateUser(this.changeInfoForm.value).subscribe(() => {
      this.usersService.getUserByUsername(this.changeInfoForm.value.username).subscribe((user) => {
        this.router.navigate(['/account-info', user.username]);
        localStorage.setItem('User', user.username);
        localStorage.setItem('Password', user.password);
        this.user = user;
        this.editInfo = false;
        this.buttonText = "Edit Info";
      });
    });
  }

  public onFocusOut(): void {
    const usernameField: string = this.changeInfoForm.value.username
    const emailField: string = this.changeInfoForm.value.email
    if (this.user) {
      if(usernameField != this.user.username) {
        this.usersService.checkIfUsernameExists(usernameField).subscribe((exists) => {
          if(exists)
            this.usernameExists = true
          else
            this.usernameExists = false
        })
      }
      if(emailField != this.user.email) {
        this.usersService.checkIfEmailExists(emailField).subscribe((exists) => {
          if(exists)
            this.emailExists = true
          else
            this.emailExists = false
        })
      }
    }
  }

  public goToProfile() {
    if (this.user)
      this.router.navigate(['/user', this.user.username]);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
