import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { DetalleComponent } from './detalle.component';
import { DetalleRoutingModule } from './detalle.routing';

@NgModule({
	imports: [
		DetalleRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDFejJ2RXAG4mnHf9ojU04hRVbFD3YjBZU'
		})
	],
	declarations: [ DetalleComponent ]
})

export class DetalleModule {}
