import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MealsEntity } from '../mealEntity';

import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetaId!: string | null;
  chracter!: MealsEntity;
  

  constructor(public fb: FormBuilder, 
    private router:Router, 
    private http:HttpClient,
    public alertController: AlertController,
    private activatedRoute: ActivatedRoute
    ) {
      
    }

   async ngOnInit() {
    this.recetaId = this.activatedRoute.snapshot.paramMap.get("idMeal");
    this.http.get<any>("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.recetaId)
    .subscribe((data) => {
      this.chracter = data.meals[0];
      console.log(this.chracter);

     })
    }

    async sacar_foto(){
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
    
      // Can be set to the src of an image now
      //imageElement.src = imageUrl;

      const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Escribir el codigo para sacar la foto',
      buttons: ['Aceptar']
    });
    await alert.present();
    }
  
    async obtener_ubicacion(){
      const coordinates = await Geolocation.getCurrentPosition();

      console.log( 'Posicion Actual:' , coordinates);

      const alert = await this.alertController.create({
        header: '***Falta***',
        message: 'Posicion Actual:' + coordinates,
        buttons: ['Aceptar']
      });
      await alert.present();
      }
    }
  