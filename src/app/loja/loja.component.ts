import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../services/Produto/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  produtoServ = new ProdutoService();
  produtos = [];

  constructor() {
    this.produtos = this.produtoServ.getServicos();
  }

  ngOnInit() {
  }

  AddToCart() {
    let carrinho = document.getElementById("cart-store");
    carrinho.classList.remove("collapsed-cart");
  }

}
