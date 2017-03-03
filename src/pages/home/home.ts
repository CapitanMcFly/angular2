import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

class Talk {
  constructor(public name, public speaker){
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  talk: Talk = new Talk ('Angular', 'Daniel');

  talks: Array<Talk> = [
    this.talk,
    { name: 'Ionic', speaker: 'Javier' },
    { name: 'AngularJS', speaker: 'Marcel' },
    { name: 'Java', speaker: 'Ivar' },
  ]

  estilo = {
    color: "orange"
  };

  grande = {
    'font-size': 'xx-large'
  };

  constructor(public navCtrl: NavController) {
    setTimeout(() => this.talk.speaker = 'Rafael', 3000);
  }

  color(){
    if(this.talk.speaker === 'Daniel')
      return 'red';
    else
      return 'green';
  }

  onClickMe($event) {
    console.log('click!');
    console.log($event);
  }

  onKey(name, $event){
    console.log(name);
    console.log($event);
  }

}
