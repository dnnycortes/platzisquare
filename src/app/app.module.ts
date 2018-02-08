import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';


const appRoutes: Routes = [
	{ path: '', component: LugaresComponent  },
	{ path: 'lugares', component: LugaresComponent },
	{ path: 'detalle/:id', component: DetalleComponent }
];


@NgModule({
	declarations: [
		AppComponent,
		ResaltarDirective,
		ContarClicksDirective,
		DetalleComponent,
		LugaresComponent
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
