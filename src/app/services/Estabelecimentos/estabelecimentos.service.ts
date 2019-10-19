import { Injectable } from '@angular/core';

import data from '../models/estabelecimento.json';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {
  estabelecimento = data;

  constructor() { }

  async get() {
    const lista = this.estabelecimento;
    return lista;
  }
}
