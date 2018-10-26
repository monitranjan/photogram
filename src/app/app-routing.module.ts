import { AddcardComponent } from './addcard/addcard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Login1Component } from './login1/login1.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: 'login1', pathMatch: 'full'},
  {path: 'login1', component: Login1Component},
  {path: 'register', component: RegisterComponent},
  {path: 'gallery', component: GalleryComponent},
  // {path: 'profile', component: ProfileComponent}
  {path: 'addcard', component: AddcardComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
