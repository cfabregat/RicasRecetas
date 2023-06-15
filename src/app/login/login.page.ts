import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterEvent, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AES } from 'crypto-js';

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

  async RecuperarContrasena(){
      const alert = await this.alertController.create({
      header: 'Recuperar contraseña',
      inputs: [
        {
          name: 'palabraClave',
          type: 'text',
          placeholder: 'Ingrese palabra clave'
        }
      ],
      buttons: [
          {
            text: 'Comprobar',
            handler: (data)=>{
            this.comprobarPalabraClave(data.palabraClave);
            }
          },
          { 
            text: 'Cancelar',
            role: 'cancel'
          }
        ],
    });
     await alert.present();
    }
   
  ionViewWillEnter(){
    this.menu.enable(false);
  }

  async comprobarPalabraClave(data: any){
    
    var login = JSON.parse(localStorage.getItem('login') || "" );

    
    if(login.claveEncriptada){
      const claveDescifrada = AES.decrypt(login.claveEncriptada, login.pregunta).toString();
      console.log(claveDescifrada);
    
    
        if(data == login.pregunta){
          const alert = await this.alertController.create({
            header: 'Su contraseña es:',
            message: 'Usuario: ' + login.nombre + 
                     '  Contraseña: ' + login.clave, //claveDescifrada,
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Palabra Incorrecta',
            message: 'La palabra clave es incorrecta.',
            buttons: ['Aceptar']
          });
          await alert.present();
        }
    }
  }
}

