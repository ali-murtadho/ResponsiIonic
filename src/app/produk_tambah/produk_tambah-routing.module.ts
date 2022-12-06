
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukTambahPage } from './produk_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 14:26:47 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */