import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

/// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';



const routes: Routes = [
  {
    path: 'dashboard' ,
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
        { path: '' , component: DashboardComponent , data: { titulo: 'Dashboard' } },
        { path: 'account-settings' , component: AccountSettingComponent , data: { titulo: 'Ajuste de cuenta' } },
        { path: 'buscar/:termino' , component: BusquedaComponent , data: { titulo: 'Busquedas' } },
        { path: 'progress' , component: ProgressComponent , data: { titulo: 'Progress' } },
        { path: 'grafica1' , component: Grafica1Component  , data: { titulo: 'Grafica1' } },
        { path: 'promesas' , component: PromesasComponent , data: { titulo: 'Promesas' } },
        { path: 'rxjs' , component: RxjsComponent , data: { titulo: 'Rxjs' } },
        { path: 'perfil' , component: PerfilComponent , data: { titulo: 'Perfil de Usuario' } },
      /*   { path: '' , redirectTo: '/dashboard', pathMatch: 'full' }, */

        /// Mantenimientos
        { path: 'hospitales' , component: HospitalesComponent , data: { titulo: 'Mantenimiento de Hospitales' }  },
        { path: 'medicos' , component: MedicosComponent , data: { titulo: 'Mantenimiento de Medicos' }  },
        { path: 'medico/:id' , component: MedicoComponent , data: { titulo: 'Mantenimiento de Medicos' }  },

        /// Rutas de Admin
        { path: 'usuarios' , canActivate: [ AdminGuard ] , component: UsuariosComponent , data: { titulo: 'Mantenimiento de Usuarios' }  },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
