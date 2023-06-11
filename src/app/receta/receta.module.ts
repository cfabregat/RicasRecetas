import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaPageRoutingModule } from './receta-routing.module';

import { RecetaPage } from './receta.page';

import { Storage } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaPageRoutingModule
  ],
  declarations: [RecetaPage],
  providers: [Storage],
})
export class RecetaPageModule {}
