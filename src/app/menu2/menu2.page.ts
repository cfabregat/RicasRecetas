import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterEvent, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {

  menues!: any[];
  searchText!: string;


  constructor(public fb: FormBuilder, public alertController: AlertController,private router:Router, private http:HttpClient, private menu:MenuController) {

    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s').subscribe(data => {
    this.menues = data.meals;
    });

   }

   ngOnInit() {
  }



/*   async cerrar_app(){
    const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Escribir el codigo para cerrar la App',
      buttons: ['Aceptar']
    });
    await alert.present();
  } */

/*   async favorito(){
    const alert = await this.alertController.create({
      header: '***Falta***',
      message: 'Agregar al localstorage un favorito',
      buttons: ['Aceptar']
    });
    await alert.present();
  } */

  async buscarReceta() {
    try {
      const data = await this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.searchText).toPromise();
      this.menues = data.meals;
    } catch (error) {
      console.error(error);
    }
  }
  
  ionViewWillEnter(){
    this.menu.enable(true);
  }

}