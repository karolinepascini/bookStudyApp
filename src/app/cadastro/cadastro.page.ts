import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  email: string;
  senha: string;

  constructor(private alertController: AlertController, public toastController: ToastController, private router: Router) {}

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

  login(){
    if(this.email === 'karoline@gmail.com' && this.senha === '1230'){
      this.router.navigateByUrl('/tabs/tab1');
      this.presentAlert();
    }else{
      this.presentToast('Email ou Senha inválida','danger');
    }
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
