
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-produk_tambah',
  templateUrl: './produk_tambah.page.html',
  styleUrls: ['./produk_tambah.page.scss'],
})
export class ProdukTambahPage implements OnInit {
  id: any;
   
								jenis: any;
								nama: any;
								banyak: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addProduk() {
    let data = {
								jenis: this.jenis,
								nama: this.nama,
								banyak: this.banyak,
    }
    this._apiService.tambah(data, '/tambahProduk.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.jenis='';
								 this.nama='';
								 this.banyak='';
          this._apiService.notif('berhasil input Produk');
          this.router.navigateByUrl('/produk');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Produk');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-12-06 14:26:47 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */