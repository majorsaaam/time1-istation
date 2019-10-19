import { Injectable } from '@angular/core';

import data from '../models/produto.json';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produto = data;

  constructor() { }

  get() {
    const lista = this.produto;
    return lista;
  }

  getServicos() {
    const lista = this.produto.filter(x => x.servico);
    return lista;
  }
}
