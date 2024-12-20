import { Routes } from '@angular/router';

// import หน้า component ต่างๆ
import { HomeComponent } from './page/home/home.component';
import { GachapongComponent } from './page/gachapong/gachapong.component';

// สร้าง path ของหน้า component ต่างๆ นั้น
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gachapong', component: GachapongComponent}
];
