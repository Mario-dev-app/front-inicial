import { UsuariosComponent } from './usuarios/usuarios.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: '',
        redirectTo: '/usuarios',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
