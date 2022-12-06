import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
    },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>
    m.LoginPageModule),
    canLoad: [AutoLoginGuard]
    },
{
                path: 'produk',
                loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule)
              },
              {
                path: 'produk_tambah',
                loadChildren: () => import('./produk_tambah/produk_tambah.module').then( m => m.ProdukTambahPageModule)
              },
              {
                path: 'produk_edit/:id',
                loadChildren: () => import('./produk_edit/produk_edit.module').then( m => m.ProdukEditPageModule)
              },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}