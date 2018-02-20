import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


@Component({
	selector: 'app-lugares',
	templateUrl: './lugares.component.html',
	styleUrls: ['./lugares.component.scss']
})


export class LugaresComponent implements OnInit {
	title = 'PlatziSquare';
	lugares = null;

	constructor(
		private lugaresService: LugaresService
	) {}

	ngOnInit(): void {
		this.lugaresService.getLugares()
			.valueChanges()
			.subscribe( (lugares) => {
				this.lugares = lugares;
				console.log( this.lugares );
				for ( const index in this.lugares ) {
					this.lugares[index].imagen = '../assets/img/' + this.lugares[index].imagen;
				}
			} );
	}
}
