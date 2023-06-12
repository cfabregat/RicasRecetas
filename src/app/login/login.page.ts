import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterEvent, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController,private router:Router, private menu: MenuController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'clave': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    try {
      var login = JSON.parse( localStorage.getItem('login') || "" ) ;

      if( login.nombre == f.nombre && login.clave == f.clave ){
        console.log('Ingresado');
        this.router.navigate(['/menu']);
      }else{
        const alert = await this.alertController.create({
          header: 'Atención!!',
          message: 'Los datos ingresados son incorrectos',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    } catch(e){
      const alert = await this.alertController.create({
        header: 'Atención!!',
        message: 'Error en los datos almacenados en el navegador, vuelva a registrarse',
        buttons: ['Aceptar']
      });
      await alert.present();
    }

    this.formularioLogin.reset();
  }
   
  ionViewWillEnter(){
    this.menu.enable(false);
  }
}