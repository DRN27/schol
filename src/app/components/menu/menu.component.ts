import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import {data} from '../../shared/data';
import {Variant} from '../../shared/data';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	public variantsList:Variant[] = data.variants;

	constructor(
		private router: Router,
		private appService: AppService
	) { }

	ngOnInit(): void {}

	selecVariant(variantData: Variant): void {
		this.appService.selectedVariant = variantData;
		this.router.navigateByUrl('/variant');
	}

}
