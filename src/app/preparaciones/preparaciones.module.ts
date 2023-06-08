import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparacionesPageRoutingModule } from './preparaciones-routing.module';

import { PreparacionesPage } from './preparaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparacionesPageRoutingModule
  ],
  declarations: [PreparacionesPage]
})
export class PreparacionesPageModule {}
