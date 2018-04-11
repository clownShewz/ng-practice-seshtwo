import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { Routes, RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormComponent } from '../form/form.component';
import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from 'app/admin/admin.component';
import { AboutComponent } from 'app/about/about.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormModule } from 'app/form/form.module';


const coreRoutes: Routes = [
  {path: 'home' , component: HomeComponent },
  {path: 'form' , component: FormComponent },
  {path: 'login', component: LoginComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'about' , component: AboutComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes, { enableTracing: true}),
    ReactiveFormsModule
  ],
  declarations: [CoreComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    FormComponent,
    AdminComponent,
    AboutComponent
  ],
  exports: [
    CoreComponent
  ]
})

export class CoreModule { }
