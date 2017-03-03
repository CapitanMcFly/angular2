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
  name: string = "name";
  speaker: string = "speaker";

  constructor(public navCtrl: NavController, public talkService: TalkService) {
    talkService.getAllTalks().subscribe(x => this.talks = x);
  }

  imprimir(){
    console.log(this.name);
    console.log(this.speaker);
  }

}
