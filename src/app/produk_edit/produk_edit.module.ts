import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdukEditPageRoutingModule } from './produk_edit-routing.module';

import { ProdukEditPage } from './produk_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukEditPageRoutingModule
  ],
  declarations: [ProdukEditPage]
})
export class ProdukEditPageModule {}




/* End of file  */

/* Created at 2022-12-06 14:26:47 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */