import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceFormComponent } from './components/reference-form/reference-form.component';

const routes: Routes = [
  { path: '', component: ReferenceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
