import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    
    localStorage.setItem("login_usuario", "cfabregat" ) ;
    localStorage.setItem("login_clave", "1234" ) ;
    localStorage.setItem("login_autologin", "0" ) ;

    var usuario = localStorage.getItem('login_usuario') ;
    var clave = localStorage.getItem('login_clave') ;

    console.log('Prueba');
/*
    if(usuario == f.nombre && clave == f.password){
       console.log('Ingresado')
    } else{
       const alert = await this.alertController.create({
         header: 'Atención!!',
         message: 'Los datos ingresados son incorrectos',
         buttons: ['Aceptar']
       });
    }
*/    
  }
}