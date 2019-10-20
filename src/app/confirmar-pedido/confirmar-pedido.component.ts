import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {
  lat: number = -22.8935813;
  lng: number = -43.1989022;
  zoom: number = 15;
  constructor() { }

  ngOnInit() {
  }

}
