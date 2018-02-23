import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearLugarComponent } from './crear-lugar.component';

const routes: Routes = [
	{ path: '', component: CrearLugarComponent }
];

@NgModule({
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
})

export class CrearLugarRoutingModule {}

