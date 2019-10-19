import { Component } from '@angular/core';

import { PromocaoService } from './services/Promocao/promocao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promoServ = new PromocaoService();
  promos = [];

  constructor() {
    this.promos = this.promoServ.get();
  }
}
