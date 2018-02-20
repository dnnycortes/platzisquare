import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';



@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styleUrls: ['./detalle.component.scss']
})


export class DetalleComponent implements OnInit {
	id = null;
	lugar: any = [];


	constructor(
		private route: ActivatedRoute,
		private lugaresService: LugaresService,
	) {
		console.log( this.route.snapshot.queryParams['action']);
		this.id = this.route.snapshot.params['id'];
	}


	ngOnInit(): void {
		this.lugaresService.buscarLugar( this.id )
			.valueChanges()
			.subscribe( (lugar) => {
				this.lugar = lugar;
				console.log( this.lugar );
			});
	}
}
