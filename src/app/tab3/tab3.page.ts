import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private alertController: AlertController, public toastController: ToastController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Lembre-se de manter o foco, nos falamos no intervalo!',
      message: '<img src="../../assets/comeca.png">',
      buttons: ['Comece sua jornada!!'],
    });

    await alert.present();
  }
  async tempAlert() {
    const alert = await this.alertController.create({
      header: 'Seu intervalo foi adiado, não se esqueça de voltar!',
      message: '<img src="../../assets/intervalo.png">',
      buttons: ['Não esquecerei de você!!'],
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

