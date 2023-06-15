import { MenuService } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { RouterEvent, RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Menu } from 'src/model/menu';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.scss'],
})
export class MenuDesplegableComponent  implements OnInit {
  
  menuOpts!: Observable<Menu[]>;  

  constructor( private router:Router, private menuService: MenuService) { }   

  ngOnInit( ) {
    this.menuOpts = this.menuService.getMenu();
  }
  
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
