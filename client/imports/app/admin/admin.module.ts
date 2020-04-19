import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { IsMakinesiComponent } from './is-makinesi/is-makinesi.component';
import { IsMakinesiFormComponent } from './is-makinesi-form/is-makinesi-form.component';



@NgModule({
  declarations: [
    AdminComponent,
    IsMakinesiComponent,
    IsMakinesiFormComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
