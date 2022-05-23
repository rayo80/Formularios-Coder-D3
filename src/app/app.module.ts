import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';
import { TableUsersComponent } from './table-users/table-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormUserComponent,
    TableUsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
