import { Component } from '@angular/core';


@Component({
	selector: 'app-lugares',
	templateUrl: './lugares.component.html'
})


export class LugaresComponent {
	title= 'PlatziSquare';
	lugares: any = [
		{ id: 1, plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Florería la gardenia' },
		{ id: 2, plan: 'pagado', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
		{ id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas' },
		{ id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre: 'Florería la gardenia II' },
		{ id: 5, plan: 'gratuito', cercania: 2, distancia: 35, active: true, nombre: 'Zapatería classic' },
		{ id: 6, plan: 'pagado', cercania: 3, distancia: 125, active: true, nombre: 'Suhi Roll' }
	];
	constructor() {

	}
}
