import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu2PageRoutingModule } from './menu2-routing.module';
import { Menu2Page } from './menu2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu2PageRoutingModule
  ],
  declarations: [Menu2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Menu2PageModule {}


/*
1-Hay que importar: import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
2-En @NgModule declarar el schema: schemas: [CUSTOM_ELEMENTS_SCHEMA],
3-En app.component.ts importar: import { register } from 'swiper/element/bundle'
4-En app.component.ts declarar: register()
*/