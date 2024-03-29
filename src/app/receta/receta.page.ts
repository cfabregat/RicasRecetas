import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MealsEntity } from '../mealEntity';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import '@ionic/pwa-elements';
//import { defineCustomElements } from '@ionic/pwa-elements/loader';

//defineCustomElements(window);

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetaId!: string | null;
  chracter!: MealsEntity;
  FOTO!:string | undefined ;
  preparaciones: MealsEntity[] = [];
  FOTO2: string | undefined;

  constructor(public fb: FormBuilder, 
    private router:Router, 
    private http:HttpClient,
    public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private storage: Storage
    ) {
      
    }

   async ngOnInit() {
    this.recetaId = this.activatedRoute.snapshot.paramMap.get("idMeal");
    this.http.get<any>("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.recetaId)
    .subscribe((data) => {
      this.chracter = data.meals[0];
      console.log(this.chracter);

     })
     this.obtenerRecetas()
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
      this.FOTO = imageUrl;

      const foto=document.querySelector(".fotooculta") as HTMLElement;
      foto.style.display = "block" ;
      /*
      const response = await fetch(image.webPath?);
      const blob = await response.blob() ;
      await this.storage.set('FOTO3', response.blob());
      */
    }
  
    async obtener_ubicacion(){
      const coordinates = await Geolocation.getCurrentPosition();

      console.log( 'Posicion Actual:' , coordinates);

      localStorage.setItem('posLatitud', coordinates.coords.latitude.toString());
      localStorage.setItem('posLongitud', coordinates.coords.longitude.toString());
    }

      async guardarRecetaEnMisPreparaciones() {
        let exists = this.laRecetaYaEstaEnElStorage(this.preparaciones, this.chracter)
        if (!exists) {
          this.preparaciones.push(this.chracter); // Agregar la nueva receta al arreglo
          await this.storage.set('chracter', this.preparaciones); // Guardar el arreglo actualizado en el storage
          alert("la receta se agrego en Mis Preparaciones")
        } else {
          alert("la receta ya esta en Mis preparaciones")
        }
      }
      
      laRecetaYaEstaEnElStorage(preparaciones: MealsEntity[], receta: MealsEntity): Boolean {
        return preparaciones.some((preparacion) => preparacion.strMeal === receta.strMeal);
      }

      async eliminarRecetaDelStorage() {

        let exists = this.laRecetaYaEstaEnElStorage(this.preparaciones, this.chracter)
        if (exists) {
          let preparacionSinReceta = this.preparaciones.filter((preparacion) => preparacion.strMeal !== this.chracter.strMeal);
          this.preparaciones = preparacionSinReceta
          await this.storage.set('chracter', this.preparaciones);
          alert("la receta se borro en Mis Preparaciones")
        } else {
          alert("la receta no esta en Mis Preparaciones")
        }
       
      }

      async obtenerRecetas() {
        await this.storage.create();
          // Obtener las recetas almacenadas del storage
          const storedData = await this.storage.get('chracter');
          let preparaciones: MealsEntity[] = [];
        
          if (Array.isArray(storedData)) {
            preparaciones = storedData; // Utilizar las recetas almacenadas existentes
          } else if (storedData) {
            preparaciones = [storedData]; // Si solo hay una receta almacenada, agregarla al arreglo
          }

          this.preparaciones = preparaciones
      }

       refreshPage() {
        location.reload();
      }
    }
  