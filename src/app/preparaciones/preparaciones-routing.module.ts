import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparacionesPage } from './preparaciones.page';

const routes: Routes = [
  {
    path: '',
    component: PreparacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparacionesPageRoutingModule {}
