import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { EstabelecimentosService } from '../services/Estabelecimentos/estabelecimentos.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  estabServ = new EstabelecimentosService();
  estabId = 0;
  estabelecimento;

  inputName: string;
  hasBeenRated: boolean = false;

  constructor() {
    this.estabId = 1;
    this.estabelecimento = this.estabServ.getById(this.estabId);
  }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}
