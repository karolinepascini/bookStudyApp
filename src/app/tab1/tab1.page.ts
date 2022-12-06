import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  materia: string;

  res;

  escolha = [{
    nome: '',
    link:'/'
  }];

  constructor() {
  }

  proc(){
    console.log(this.materia);

    const tudo = document.querySelector('#all');
    tudo?.classList.add('del');
    tudo?.classList.remove('add');

    const res = document.querySelector('#res');
    res?.classList.remove('del');
    res?.classList.add('add');

    this.escolha = [{
      nome: this.materia,
      link: '/' +this.materia
    }];
    console.log(this.escolha);
  }

}
