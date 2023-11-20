import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
//import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: 'list', component: ListComponent },
  { path: '', component: CreateComponent },
  //{ path: 'edit/:id', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}