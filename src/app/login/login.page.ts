import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Estamos quase lá!',
      subHeader: 'Para finalizar seu cadastro, você será direcionado para um questionário.',
      message: 'E a partir dele criaremos seu Cronograma!',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {}
}
