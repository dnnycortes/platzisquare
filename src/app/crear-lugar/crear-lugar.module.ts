import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CrearLugarRoutingModule } from './crear-lugar.routing';
import { CrearLugarComponent } from './crear-lugar.component';

@NgModule({
	imports: [
		CrearLugarRoutingModule,
		FormsModule
	],
	declarations: [ CrearLugarComponent ]
})

export class CrearLugarModule {}
