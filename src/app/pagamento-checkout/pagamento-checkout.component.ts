import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../services/Produto/produto.service';
import { PromocaoService } from '../services/Promocao/promocao.service';

@Component({
  selector: 'app-pagamento-checkout',
  templateUrl: './pagamento-checkout.component.html',
  styleUrls: ['./pagamento-checkout.component.css']
})
export class PagamentoCheckoutComponent implements OnInit {
  produtoServ = new ProdutoService();
  promoServ = new PromocaoService();
  productId = 0;
  produtos = [];

  constructor() {
    this.productId = 5;
    const produto = this.produtoServ.getById(this.productId);
    this.produtos.push(produto);
    const promocao = this.promoServ.getByProduto(produto.id);
    if (promocao && promocao.adicionais && promocao.adicionais.length > 0) {
      promocao.adicionais.forEach(x => {
        const add = this.produtoServ.getById(x);
        add.valor = 0;
        this.produtos.push(add);
      });
    }
  }

  ngOnInit() {
  }

  total() {
    let final = 0;
    this.produtos.forEach(x => {
      final += x.valor;
    })
    return final;
  }
}
