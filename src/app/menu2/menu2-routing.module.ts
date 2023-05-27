import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu2Page } from './menu2.page';

const routes: Routes = [
  {
    path: '',
    component: Menu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu2PageRoutingModule {}
