import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MealsEntity } from '../mealEntity';

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
    
  

/*CRISTIAN
    
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
    }*/
  }