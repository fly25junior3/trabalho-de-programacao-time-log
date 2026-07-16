import { Usuario } from "./Usuario";
import { Cliente } from "./Cliente";

export class Administrador extends Usuario {
    private nivelAcesso: number;

    constructor(nome: string, email: string, senha: string, nivelAcesso: number) {
        super(nome, email, senha);
        this.nivelAcesso = nivelAcesso;
    }

    visualizarDashBord(): void {
        //Ainda será implementado
    }

    getNivelAcesso(): number {
        return this.nivelAcesso;
    }

    removerCliente(id: number): void {
        if (this.nivelAcesso===3){
            //remover Cliente
        }
       else {
        console.log("Você não possui permissão para remover clientes.");
    }
}
     editarCliente(id: number): void {
        if (this.nivelAcesso>=2){
            //edita informações do cliente
        }
       else {
        console.log("Você não possui permissão para editar clientes.");
    }
}
      listarCliente(): void {
        if (this.nivelAcesso>=1){
            //listar Cliente
        }
       else {
        console.log("Você não possui permissão para listar clientes.");
    }
}
      gerarRelatorio(): void {
        if (this.nivelAcesso>=1){
            //Gera um realtorio de erros
        }
       else {
        console.log("Você não possui permissão para gerar um relatorio de erros.");
    }
    
}
}