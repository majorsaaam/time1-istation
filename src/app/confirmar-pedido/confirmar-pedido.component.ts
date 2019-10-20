import { Component, OnInit } from '@angular/core';

import { EstabelecimentosService } from '../services/Estabelecimentos/estabelecimentos.service';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {
  estabServ = new EstabelecimentosService();
  lat: number = -22.8935813;
  lng: number = -43.1989022;
  zoom: number = 15;
  estabId = 0;
  estabelecimento;

  constructor() {
    this.estabId = 1;
    this.estabelecimento = this.estabServ.getById(this.estabId);
  }

  ngOnInit() {
  }

}
