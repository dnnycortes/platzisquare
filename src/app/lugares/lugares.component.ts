import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


@Component({
	selector: 'app-lugares',
	templateUrl: './lugares.component.html',
	styleUrls: ['./lugares.component.scss']
})


export class LugaresComponent {
	title = 'PlatziSquare';
	lugares = null;

	constructor(
		private lugaresService: LugaresService
	) {
		lugaresService.getLugares()
			.valueChanges()
			.subscribe( (lugares) => {
				this.lugares = lugares;
			} );
	}
}
