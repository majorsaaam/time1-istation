import { Component } from '@angular/core';

import { PromocaoService } from './services/Promocao/promocao.service';
import { EstabelecimentosService } from './services/Estabelecimentos/estabelecimentos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promoServ = new PromocaoService();
  estabServ = new EstabelecimentosService();
  promos = [];

  constructor() {
    this.promos = this.promoServ.get();
  }

  empresa(id) {
    return this.estabServ.getById(id).nome;
  }
}
