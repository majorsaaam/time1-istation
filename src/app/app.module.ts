import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';
import { PagamentoCheckoutComponent } from './pagamento-checkout/pagamento-checkout.component';
import { ConfirmarPedidoComponent } from './confirmar-pedido/confirmar-pedido.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ChartsModule } from 'ng2-charts';

const rotasApp: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'loja', component: LojaComponent },
  { path: 'carrinho', component: PagamentoCheckoutComponent },
  { path: 'confirmacao', component: ConfirmarPedidoComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'relatorios', component: RelatorioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    HomeComponent,
    PagamentoCheckoutComponent,
    ConfirmarPedidoComponent,
    AvaliacaoComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotasApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3eUcTNnCDcyDcKMqCCQIFxYnEw85b7mk'
    }),
    ChartsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }