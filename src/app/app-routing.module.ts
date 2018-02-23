import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';

const routes: Routes = [
	{ path: '', component: LugaresComponent },
	{ path: 'detalle', loadChildren: './detalle/detalle.module#DetalleModule' },
	{ path: 'crear-lugar', loadChildren: './crear-lugar/crear-lugar.module#CrearLugarModule' },
	{ path: 'contacto', loadChildren: './contacto/contacto.module#ContactoModule' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
