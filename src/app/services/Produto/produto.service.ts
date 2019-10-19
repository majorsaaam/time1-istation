import { Injectable } from '@angular/core';

import data from '../models/produto.json';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produto = data;

  constructor() { }

  async get() {
    const lista = this.produto;
    return lista;
  }
}
