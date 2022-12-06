import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private alertController: AlertController, public toastController: ToastController) {}

  async confirm() {
    const alert = await this.alertController.create({
      header: 'Parabéns, você concluiu sua meta!',
      message: '<img src="../../assets/fest.png">',
      buttons: ['Continuar assim!'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

  async presentToast( texto: string, cor: string){
    const toast = await this.toastController.create({
      message:texto,
      color:cor,
      duration: 2000
    });
    toast.present();
  }
}

