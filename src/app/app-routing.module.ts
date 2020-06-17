import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForsideComponent } from './pages/forside/forside.component';


const routes: Routes = [
  {path: '', redirectTo: 'forside', pathMatch: 'full'},
  {path: 'forside', component: ForsideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
