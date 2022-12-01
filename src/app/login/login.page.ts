import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(private alertController: AlertController, formBouilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nome:['', Validators.compose([Validators.required, Validators.minLength(4)])],
      sobrenome:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      senha:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLebght(8)])],
      confirmaSenha:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLebght(8)])
    ],
      fone:['',Validators.compose([Validators.required])],
    });
   }

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

salvarLogin(){
  console.log('Formulário:', this.formLogin.valid);
}
