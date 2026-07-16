export class Sessao {
  //atividade: Atividade;
  data: Date;
  horaInicio: Date;
  horaFim: Date;
  duracao: number;

  constructor(
    //atividade: Atividade,
    data: Date,
    horaInicio: Date,
    horaFim: Date,
    duracao: number
  ) {
    //this.atividade = atividade;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaFim = horaFim;
    this.duracao = duracao;
  }

  calcularDuracao(): void {
    // TODO: Implement
  }
}