import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';

@Component({
  selector: 'app-gerar',
  templateUrl: './gerar.page.html',
  styleUrls: ['./gerar.page.scss'],
})
export class GerarPage implements OnInit {
  moveStart: RangeValue;
  moveEnd: RangeValue;

  constructor() { }

  ngOnInit() {
  }

  onIonKnobMoveStart(ev: Event) {
    this.moveStart = (ev as RangeCustomEvent).detail.value;
  }

  onIonKnobMoveEnd(ev: Event) {
    this.moveEnd = (ev as RangeCustomEvent).detail.value;
  }

}
