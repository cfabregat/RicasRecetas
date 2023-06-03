import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

 
  recetaId?: string | null;
  chracter!: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,public alertController: AlertController) {
    
    }

  ngOnInit() {
    this.recetaId = this.activatedRoute.snapshot.paramMap.get("idMeal")
    this.http
      .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i" + this.recetaId)
      .subscribe(res => this.chracter = res)  
    }


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

}