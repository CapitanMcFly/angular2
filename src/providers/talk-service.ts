import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { Http } from "@angular/http";


@Injectable()
export class TalkService {

  constructor(public http: Http) {
  }

  getAllTalks(){
    return this.http.get('http://data.agenda.wedeploy.io/talks')
    .do(x => console.log(x))
    .map(response => response.json());
  }

}
