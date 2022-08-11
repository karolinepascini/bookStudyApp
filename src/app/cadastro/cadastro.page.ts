import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pronto(a) para os estudos?',
      message: '<img src="../../assets/esquilolivro.png">',
      buttons: ['Vamos lá'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
