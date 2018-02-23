import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { ContactoRoutingModule } from './contacto.routing';
import { ContactoComponent } from './contacto.component';

@NgModule({
	imports: [
		ContactoRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDFejJ2RXAG4mnHf9ojU04hRVbFD3YjBZU'
		})
	],
	declarations: [ ContactoComponent ]
})

export class ContactoModule {}
