import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
	lat:number = 19.4218099;
	lng:number = -99.1613685;
	zoom:number = 15;

	constructor() { }

	ngOnInit() {
	}

}
