import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
// import { UsersService } from 'src/app/services/users.service';
// import { Observable } from 'rxjs/internal/Observable';
// import { map } from 'rxjs/internal/operators/map';
// import { of } from 'rxjs/internal/observable/of';


export class CustomValidators {

  static forbiddenCharValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = regex.test(control.value);
      return forbidden ? {forbiddenChar: {value: control.value}} : null;
    };
  }

  // nu functioneaza
  // static usernameValidator(usersService: UsersService): AsyncValidatorFn  {
  //   return (control: AbstractControl): Observable<ValidationErrors> => {
  //     console.log(control.value)
  //     return usersService
  //       .checkIfUsernameExists(control.value)
  //       .pipe(map((result: boolean) => of(result ? { usernameAlreadyExists: true } : null)));
  //   };
  // }

  // static emailValidator(usersService: UsersService): AsyncValidatorFn  {
  //   return (control: AbstractControl): Observable<ValidationErrors> => {
  //     return usersService
  //       .checkIfEmailExists(control.value)
  //       .pipe(map((result: boolean) => of(result ? { emailAlreadyExists: true } : null)));
  //   };
  // }
}

