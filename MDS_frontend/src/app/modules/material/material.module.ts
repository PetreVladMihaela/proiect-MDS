import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// daca nu vi se sugereaza importul, cautati pe net
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],

  imports: [ // in acest modul importam materialele de la angular folosite in celelalte module ale programului
    CommonModule, // <- default, nu stergeti
    MatFormFieldModule, // <- pentru a crea campurile formularelor
    MatInputModule, // <- pentru a putea scrie in campurile formularelor
    MatButtonModule,
    MatDialogModule // <- pentru dialogul modal de login
  ],

  exports: [ // materialele importate in acest modul trebuie si exportate, pt. a putea fi accesate in restul aplicatiei  
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
