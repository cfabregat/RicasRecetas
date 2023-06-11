import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparacionesPageRoutingModule } from './preparaciones-routing.module';

import { PreparacionesPage } from './preparaciones.page';

import { Storage } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparacionesPageRoutingModule
  ],
  declarations: [PreparacionesPage],
  providers: [Storage]
})
export class PreparacionesPageModule {}
