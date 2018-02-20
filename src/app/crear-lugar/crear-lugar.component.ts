import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


@Component({
	selector: 'app-crear-lugar',
	templateUrl: './crear-lugar.component.html',
	styleUrls: ['./crear-lugar.component.scss']
})


export class CrearLugarComponent implements OnInit {
	lugar: any = {};
	imagen: String = '../../assets/img/default.png';


	constructor(
		private lugaresService: LugaresService,
	) { }


	ngOnInit() {
	}


	guardarLugar() {
		const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
		this.lugaresService.obtenerGeoData( direccion )
			.subscribe( ( result ) => {
				this.lugar.lat = result.json().results[0].geometry.location.lat;
				this.lugar.lng = result.json().results[0].geometry.location.lng;
				this.lugar.id = Date.now();
				this.lugaresService.guardarLugar( this.lugar );
				alert('Negocio guardado con éxito');
				this.lugar = {};
				this.imagen = '../../assets/img/default.png';
			});
	}


	cargarImagen( event: any ) {
		const archivo = event.srcElement.files;
		this.lugar.imagen = archivo[0].name;

		if ( event.target.files && event.target.files[0] ) {
			const reader = new FileReader();

			reader.onload = ( event: any ) => {
				this.imagen = event.target.result;
			};
			reader.readAsDataURL( event.target.files[0] );
		}
	}
}
