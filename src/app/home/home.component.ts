import { Component, OnInit } from '@angular/core';

import { PromocaoService } from '../services/Promocao/promocao.service';
import { EstabelecimentosService } from '../services/Estabelecimentos/estabelecimentos.service';
import { ProdutoService } from '../services/Produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  promoServ = new PromocaoService();
  estabServ = new EstabelecimentosService();
  prodServ = new ProdutoService();
  promos = [];

  constructor() {
    this.promos = this.promoServ.get();
  }

  ngOnInit() {
  }

  produto(id) {
    return this.prodServ.getById(id).nome;
  }

  empresa(id) {
    return this.estabServ.getById(id).nome;
  }

  promocao(promo) {
    if (promo.valor) {
      return `por R$${promo.valor}`;
    } else {
      return promo.msg;
    }
  }
}
