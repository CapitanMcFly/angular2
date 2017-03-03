import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Talk} from "../home/home";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  talks: Array<Talk> = [
    { name: 'Angular', speaker: 'Daniel' },
    { name: 'Ionic', speaker: 'Javier' },
    { name: 'AngularJS', speaker: 'Marcel' },
    { name: 'Java', speaker: 'Ivar' },
  ]

  constructor(public navCtrl: NavController) {

  }

  clicked($event) {
    console.log('padre: '+ $event.name + ' - ' + $event.speaker);
  }

}
