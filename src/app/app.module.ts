import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearLugarComponent } from './crear-lugar/crear-lugar.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { LugaresService } from './services/lugares.service';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
	{ path: '', component: LugaresComponent  },
	{ path: 'lugares', component: LugaresComponent },
	{ path: 'detalle/:id', component: DetalleComponent },
	{ path: 'contacto', component: ContactoComponent },
	{ path: 'crear-lugar', component: CrearLugarComponent }
];

export const firebaseConfig = {
	apiKey: "AIzaSyA1mXorXWnzFFJKG0J0IrPLmpljw0J3G1o",
	authDomain: "platzisquare-1289.firebaseapp.com",
	databaseURL: "https://platzisquare-1289.firebaseio.com",
	storageBucket: "platzisquare-1289.appspot.com",
	messagingSenderId: "393477651739"
};


@NgModule({
	declarations: [
		AppComponent,
		DetalleComponent,
		LugaresComponent,
		ContactoComponent,
		CrearLugarComponent,
		ResaltarDirective,
		ContarClicksDirective,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDFejJ2RXAG4mnHf9ojU04hRVbFD3YjBZU'
		}),
		RouterModule.forRoot( appRoutes ),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		HttpModule
	],
	providers: [
		LugaresService
	],
	bootstrap: [AppComponent]
})


export class AppModule { }
