import { Injectable } from '@angular/core';

const Promocao = require('../model/promocao');

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  constructor() { }

  async get() {
    try {
      const lista = await Promocao.find();
      return lista;
    }
    catch (err) {
        return [];
    }
  }
}
