import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { LugaresService } from './services/lugares.service';
import { HttpModule } from '@angular/http';

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
		LugaresComponent,
		ResaltarDirective,
		ContarClicksDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		HttpModule
	],
	providers: [
		LugaresService
	],
	bootstrap: [AppComponent]
})


export class AppModule { }
