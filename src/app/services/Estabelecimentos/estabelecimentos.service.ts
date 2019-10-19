import { Injectable } from '@angular/core';

const Estabelecimentos = require('../model/estabelecimentos');

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {
  constructor() { }

  async get() {
    try {
      const lista = await Estabelecimentos.find();
      return lista;
    }
    catch (err) {
        return [];
    }
  }
}
