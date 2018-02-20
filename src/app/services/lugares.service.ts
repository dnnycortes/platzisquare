import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Injectable()

export class LugaresService {
	lugares: AngularFireList<any>;
	lugar: AngularFireObject<any>;

	constructor(
		private fb: AngularFireDatabase,
		private http: Http
	) {}

	public getLugares() {
		this.lugares = this.fb.list('lugares/');
		return this.lugares;
	}

	public buscarLugar( id ) {
		this.lugar = this.fb.object('lugares/' + id);
		return this.lugar;
	}

	public guardarLugar ( lugar ): void {
		this.fb.database.ref('lugares/' + lugar.id).set( lugar );
	}

	public obtenerGeoData ( direccion ) {
		return this.http.get( 'http://maps.google.com/maps/api/geocode/json?address=' + direccion );
	}
}
