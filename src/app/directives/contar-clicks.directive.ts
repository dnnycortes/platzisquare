import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: 'li[contar-clicks]'
})

export class ContarClicksDirective {
	clickN = 0;

	// Editar elemento de DOM recibe: atributo que queremos editar,
	@HostBinding('style.opacity') opacity: number = .1;

	// Escucha eventos del dom
	@HostListener( 'click', ['$event.target']) onClick(btn) {
		console.log( 'a', btn, 'Número de clicks: ', this.clickN++ );
		this.opacity += .1;
	}
}
