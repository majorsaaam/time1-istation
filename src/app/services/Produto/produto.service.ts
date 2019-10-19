import { Injectable } from '@angular/core';

const Produto = require('../model/produto');

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor() { }

  async get() {
    try {
      const lista = await Produto.find();
      return lista;
    }
    catch (err) {
        return [];
    }
  }
}
