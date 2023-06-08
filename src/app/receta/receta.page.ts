import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

 
  recetaId!: any[];
  chracter!: any;

  constructor(public fb: FormBuilder, private router:Router, private http:HttpClient,public alertController: AlertController) {

    }

  ngOnInit() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.recetaId)
      .subscribe(data => {
          this.chracter = data ;
     })

     /*.subscribe((res) => {
          this.chracter = res;
     */
    }
  }

/*CRISTIAN
  async sacar_foto(){
    const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Escribir el codigo para sacar la foto',
      buttons: ['Aceptar']
    });
    await alert.present();
    }
  async obtener_ubicacion(){
      const alert = await this.alertController.create({
        header: '***Falta***',
        message: 'Escribir el codigo para obtener ubicacion',
        buttons: ['Aceptar']
      });
      await alert.present();
      }
      */

    
  

