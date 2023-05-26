import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterEvent, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public fb: FormBuilder, public alertController: AlertController,private router:Router) { }

  ngOnInit() {
  }

  async cerrar_session(){
    const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Escribir el codigo para cerrar eliminar el localstore(login, autologin)',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async cerrar_app(){
    const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Escribir el codigo para cerrar la App',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async favorito(){
    const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Agregar al localstorage un favorito',
      buttons: ['Aceptar']
    });
    await alert.present();
  }


}
