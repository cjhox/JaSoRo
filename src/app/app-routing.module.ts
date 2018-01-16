import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './intern/services/auth.service';

const appRoutes: Routes = [

  { path: 'intern', loadChildren: 'app/intern/intern.module#InternModule', canLoad: [AuthService] },

  { path: '', redirectTo: '/public', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
