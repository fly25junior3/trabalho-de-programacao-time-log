class Usuario{
    nome:string;
    private email:string;
    private senha:string;
    tarefas:object[];
    constructor(nome:string,  email:string, senha:string, tarefas:object[] = []) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tarefas = tarefas;
    };
    setEmail(novoEmail:string):void{
        this.email = novoEmail;
    };
    getEmail():string{
        return this.email;
    };
    setSenha(novaSenha:string):void{
        this.senha = novaSenha;
    };
    getSenha():string{
        return this.senha;
    };
    criarTarefa(tempoEmMin:number, nome:string):void{
        this.tarefas.push(
            {
                tempoEmMin: tempoEmMin,
                nome: nome
            }
        )
    };

    getTarefas():object[]{
        return this.tarefas;
    };
};