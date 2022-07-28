import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    /* canActivate: [IsLoggedGuard], */
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
    /* canActivate: [IsntLoggedGuard], */
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
