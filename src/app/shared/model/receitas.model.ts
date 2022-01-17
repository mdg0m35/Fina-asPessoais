import { Data } from "@angular/router";
export interface receitasM {
  _id: number;
  valor: number
  dataReceb: Data
  dataReceEspe:Data
  descricao:string
  tipoReceita:string
}


export interface criarReceitas {
  valor: number;
  dataRecebimento: Data;
  dataRecebimentoEsperado: Data;
  descricao: string;
  tipoReceita: string;
}
