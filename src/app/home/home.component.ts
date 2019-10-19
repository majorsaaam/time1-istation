import { Component, OnInit } from '@angular/core';

import { PromocaoService } from '../services/Promocao/promocao.service';
import { EstabelecimentosService } from '../services/Estabelecimentos/estabelecimentos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  promoServ = new PromocaoService();
  estabServ = new EstabelecimentosService();
  promos = [];

  constructor() {
    this.promos = this.promoServ.get();
  }

  ngOnInit() {
  }

  empresa(id) {
    return this.estabServ.getById(id).nome;
  }
}
