import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// daca nu vi se sugereaza importul, cautati pe net
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],

  imports: [ // in acest modul importam materialele de la angular folosite in celelalte module ale programului
    CommonModule, // <- default, nu stergeti
    MatFormFieldModule, // <- pentru a crea campurile formularelor
    MatInputModule, // <- pentru a putea scrie in campurile formularelor
    MatButtonModule,
    MatDialogModule, // <- pentru dialogul modal de login
    MatCardModule,
    MatSelectModule,
    MatIconModule
  ],

  exports: [ // materialele importate in acest modul trebuie si exportate, pt. a putea fi accesate in restul aplicatiei  
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class MaterialModule { }
