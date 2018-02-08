import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html'
})


export class DetalleComponent {
	lugares: any = [
		{ id: 1, plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Florería la gardenia', description: 'Descripción de este negocio' },
		{ id: 2, plan: 'pagado', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita', description: 'Descripción de este negocio' },
		{ id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas', description: 'Descripción de este negocio' },
		{ id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre: 'Florería la gardenia II', description: 'Descripción de este negocio' },
		{ id: 5, plan: 'gratuito', cercania: 2, distancia: 35, active: true, nombre: 'Zapatería classic', description: 'Descripción de este negocio' },
		{ id: 6, plan: 'pagado', cercania: 3, distancia: 125, active: true, nombre: 'Suhi Roll', description: 'Descripción de este negocio' }
	];
	id = null;
	lugar: any = [];
	constructor(
		private route: ActivatedRoute
	) {
		console.log( this.route.snapshot.queryParams['action']);

		this.id = this.route.snapshot.params['id'];
		this.lugar = this.buscarLugar();

		console.log( this.id );
		console.log( this.lugar );
	}

	buscarLugar() {
		//return this.lugares.filter( (lugar) => { return lugar.id == this.id } )[0] || null;

		return this.lugares.find( (lugar) => { return lugar.id == this.id } ) || null;
	}
}
