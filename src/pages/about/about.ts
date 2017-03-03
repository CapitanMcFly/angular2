import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Talk} from "../home/home";
import {TalkService} from "../../providers/talk-service";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  talks: Array<Talk>;

  constructor(public navCtrl: NavController, public talkService: TalkService) {
    talkService.getAllTalks().subscribe(x => this.talks = x);
  }

}
