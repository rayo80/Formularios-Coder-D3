import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatListModule
  ]
})
export class MaterialModule { }