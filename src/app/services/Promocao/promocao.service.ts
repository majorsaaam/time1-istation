import { Injectable } from '@angular/core';

import data from '../models/promocao.json';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  promocao = data;

  constructor() { }

  get() {
    const lista = this.promocao;
    return lista;
  }
}
