import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { Http } from "@angular/http";

import {Talk} from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  talks: Array<Talk>;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://data.agenda.wedeploy.io/talks')
    .do(x => console.log(x))
    .map(response => response.json())
    .subscribe(respMap => this.talks=respMap);
  }

}
