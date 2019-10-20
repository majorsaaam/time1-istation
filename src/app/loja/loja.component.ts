import { Component, OnInit } from '@angular/core';

import { EstabelecimentosService } from '../services/Estabelecimentos/estabelecimentos.service';
import { ProdutoService } from '../services/Produto/produto.service';
import { PromocaoService } from '../services/Promocao/promocao.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  produtoServ = new ProdutoService();
  estabServ = new EstabelecimentosService();
  promoServ = new PromocaoService();
  productId = 0;
  produto;
  estabelecimento;
  promocao;

  constructor() {
    this.productId = 5;
    this.produto = this.produtoServ.getById(this.productId);
    this.estabelecimento = this.estabServ.getById(this.produto.estabelecimento);
    this.promocao = this.promoServ.getByProduto(this.produto.id);
  }

  ngOnInit() {
  }

  AddToCart() {
    let carrinho = document.getElementById("cart-store");
    carrinho.classList.remove("collapsed-cart");
  }

}
