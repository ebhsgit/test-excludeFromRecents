import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppStartProvider } from '../../providers/app-start/app-start';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public AppStartProvider: AppStartProvider) {

	}

}
