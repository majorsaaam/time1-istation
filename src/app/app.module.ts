import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';

const rotasApp: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'loja', component: LojaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotasApp)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }