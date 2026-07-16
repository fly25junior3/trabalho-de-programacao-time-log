 export class Atividade {
  id: number;
  nome: string;
  descricao: string;
  metaHoras: number;
  tempoAcumulado: number;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    metaHoras: number,
    tempoAcumulado: number
  ) {
    this.id = id;
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