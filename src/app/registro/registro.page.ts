import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AES } from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'clave': new FormControl("", Validators.required),
      'clave2': new FormControl("", Validators.required),
      'pregunta': new FormControl("", Validators.required)
    })
   }
   ngOnInit() {
  }

  async guardar(){
    
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Atención!!',
        message: 'Se deben ingresar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if(f.clave != f.clave2 ){
      const alert = await this.alertController.create({
        header: 'Atención!!',
        message: 'La claves ingresadas no coinciden',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }



    // Este reset sirve para resetear todos los campos del formulario
    else{
      this.formularioRegistro.reset();
    }

    var login = {
      nombre: f.nombre,
      clave: f.clave,
      pregunta: f.pregunta,
      autologin: "0",
      //claveEncriptada: AES.encrypt(f.clave, f.pregunta).toString()
    }
    
    localStorage.setItem('login', JSON.stringify(login));
    console.log( login ) ;

    const alert = await this.alertController.create({
      header: 'Registro exitoso!!',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}


