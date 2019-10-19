import { Component, OnInit } from '@angular/core';

import { PromocaoService } from '../services/Promocao/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  promoServ = new PromocaoService();
  promos = [];

  constructor() {
    this.promos = this.promoServ.get();
  }

  ngOnInit() {
  }

}
