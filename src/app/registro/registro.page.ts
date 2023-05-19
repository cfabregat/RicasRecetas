import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

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
      'password': new FormControl("", Validators.required),
      'confirm-password': new FormControl("", Validators.required),
      'pregunta1': new FormControl("", Validators.required)
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
    // Este reset sirve para resetear todos los campos del formulario
    else{
      this.formularioRegistro.reset();
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
}


