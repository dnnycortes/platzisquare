import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';


const appRoutes: Routes = [
	{ path: '', component: LugaresComponent  },
	{ path: 'lugares', component: LugaresComponent },
	{ path: 'detalle/:id', component: DetalleComponent },
	{ path: 'contacto', component: ContactoComponent }
];


@NgModule({
	declarations: [
		AppComponent,
		DetalleComponent,
		LugaresComponent,
		ContactoComponent,
		ResaltarDirective,
		ContarClicksDirective,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDFejJ2RXAG4mnHf9ojU04hRVbFD3YjBZU'
		}),
		RouterModule.forRoot( appRoutes )
	],
	providers: [],
	bootstrap: [AppComponent]
})


export class AppModule { }
