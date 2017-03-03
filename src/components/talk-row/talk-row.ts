import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'talk-row',
  templateUrl: 'talk-row.html'
})
// El uso de interfaces no genera ningún codigo (es prescindible), sólo ayuda al IDE
export class TalkRowComponent implements OnInit {

  @Input() talk;
  @Input() index: number;

  constructor() {
    // Los input no existen en el constructor
    console.log("constructor -> talk: " + this.talk);
  }

  ngOnInit(){
    // Se puede llamar a un input desde el método OnInit()
    console.log("ngOnInit -> talk: " + this.talk);
  }

  style(){
    return {
      'border-color': this.talk.category == 'workshop' ? 'purple' : 'red',
      'border-left': '2px solid #00274F',
      'padding-left': '10px',
      'margin-bottom': '20px'
    }
  }

}
