 export class Atividade {

  nome: string;
  descricao: string;
  metaHoras: number;
  tempoAcumulado: number;

  constructor(
    
    nome: string,
    descricao: string,
    metaHoras: number,
    tempoAcumulado: number
  ) {
    
    this.nome = nome;
    this.descricao = descricao;
    this.metaHoras = metaHoras;
    this.tempoAcumulado = tempoAcumulado;
  }

  atualizarTempo(): void {
    // TODO: Implement
  }

  calcularProgresso(): void {
    // TODO: Implement
  }
}