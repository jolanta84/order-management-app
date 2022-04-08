import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../../shared/material.module';



@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, AccountRoutingModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class AccountModule {}
