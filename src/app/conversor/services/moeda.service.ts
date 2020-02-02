import { Injectable } from '@angular/core';

import { Moeda } from '../models'

@Injectable()
export class MoedaService {
  private moedas: Moeda[]

  constructor() { }

  private moedasObj = [
    { sigla: "AUD", descricao: "Dólar australiano" },
    { sigla: "BGN", descricao: "Lev búlgaro" },
    { sigla: "BRL", descricao: "Real brasileiro" },
    { sigla: "CAD", descricao: "Dólar canadense" },
    { sigla: "CHF", descricao: "Fanco suíço" },
    { sigla: "CNY", descricao: "Yuan Chinês" },
    { sigla: "CZK", descricao: "Coroa República Tcheca" },
    { sigla: "DKK", descricao: "Coroa dinamarquesa" },
    { sigla: "EUR", descricao: "Euro" },
  ]

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
