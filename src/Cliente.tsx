import { Usuario } from "./Usuario";

export class Cliente extends Usuario{

    tarefas: object[];

    constructor(nome: string, email: string, senha: string) {
        super(nome, email, senha);
        this.tarefas = [];
    }

    criarTarefa(tempoEmMin: number, nome: string): void {
        this.tarefas.push({
            tempoEmMin: tempoEmMin,
            nome: nome
        });
    }

    getTarefas(): object[] {
        return this.tarefas;
    }

    visualizarDashBord(): void {
        // Ainda será implementado
    }
}
