
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukEditPage } from './produk_edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 14:26:47 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */