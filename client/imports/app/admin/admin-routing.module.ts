import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IsMakinesiComponent } from './is-makinesi/is-makinesi.component';
import { IsMakinesiFormComponent } from './is-makinesi-form/is-makinesi-form.component';



const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'ismakinesi', component: IsMakinesiComponent },
      { path: 'ismakinesi/:mode/:id', component: IsMakinesiFormComponent },
      { path: 'ismakinesi/:mode', component: IsMakinesiFormComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
