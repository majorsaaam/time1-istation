import { Injectable } from '@angular/core';

import produtoData from '../models/produto.json';
import estabData from '../models/estabelecimento.json';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  estabelecimento = estabData;
  produto = produtoData;

  constructor() { }

  search(text) {
    const lista = this.estabelecimento.find(x => x.nome.includes(text));
    const listaProd = this.produto.find(x => x.nome.includes(text));
    const final = [].concat(lista, listaProd);
    return final;
  }
}
