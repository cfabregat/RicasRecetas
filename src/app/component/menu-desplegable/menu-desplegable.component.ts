import { Component, OnInit } from '@angular/core';
import { RouterEvent, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.scss'],
})
export class MenuDesplegableComponent  implements OnInit {
  
  /* menuOpts: any;  */

  constructor(private router:Router) { }

  ngOnInit() {}
   /*  this.menuOpts = [
      {
        "url": "./menu2/menu2.module",
        "iconName":"library-outline",
        "optionName":"Recetas"
      },
      {
        "url": "./favoritos/favoritos.module",
        "iconName":"book-outline",
        "optionName":"Mis Preparaciones"
      }
    ]; */
  

  async cerrar_session(){
    this.router.navigate(['/login']);
    // const alert = await this.alertController.create({
    //   header: '***Falta***',
    //   message: 'Escribir el codigo para cerrar eliminar el localstore(login, autologin)',
    //   buttons: ['Aceptar']
    // });
    // await alert.present();
  }

}
