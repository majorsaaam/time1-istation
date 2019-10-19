import { Injectable } from '@angular/core';

import data from '../models/estabelecimento.json';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {
  estabelecimento = data;

  constructor() { }

  get() {
    const lista = this.estabelecimento;
    return lista;
  }

  getById(id) {
    const lista = this.estabelecimento.find(x => x.id === id);
    return lista;
  }
}
