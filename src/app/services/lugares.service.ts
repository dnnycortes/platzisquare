import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class LugaresService {
	lugares: any = [
		{ id: 1, plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Florería la gardenia', img: '../../assets/img/tienda-floreria-gardenias.png' },
		{ id: 2, plan: 'pagado', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita', img:'../../assets/img/tienda-donas-pasadita.png' },
		{ id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas', img:'../../assets/img/tienda-accesorios-huellitas.png'},
		{ id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre: 'Florería la gardenia II', img: '../../assets/img/tienda-floreria-gardenias.png'},
		{ id: 5, plan: 'gratuito', cercania: 2, distancia: 35, active: true, nombre: 'Zapatería classic', img: '../../assets/img/tienda-zapateria-artesanos.png' },
		{ id: 6, plan: 'pagado', cercania: 3, distancia: 125, active: true, nombre: 'Estudio láser', img:'../../assets/img/tienda-estudio-corte-laser.png' }
	];

	constructor(
		private afDB: AngularFireDatabase,
		private http: Http
	) {}

	public getLugares() {
		return this.afDB.list('lugares/');
	}

	public buscarLugar( id ) {
		//return this.lugares.filter( (lugar) => { return lugar.id == id } )[0] || null;
		return this.lugares.find( (lugar) => { return lugar.id == id } ) || null;
	}

	public guardarLugar ( lugar ) {
		console.log( lugar );
		this.afDB.database.ref('lugares/' + lugar.id).set( lugar );
	}

	public obtenerGeoData ( direccion ) {
		//http://maps.google.com/maps/api/geocode/xml?address=
		return this.http.get( 'http://maps.google.com/maps/api/geocode/json?address=' + direccion );

	}
}
