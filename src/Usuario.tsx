export abstract class Usuario{
    private _nome:string;
    private _email:string;
    private _senha:string;
    private _id:number
    constructor(nome:string,  email:string, senha:string) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._id = Date.now() + Math.floor(Math.random() * 1000);
    };
    
    setEmail(novoEmail:string):void{
        this._email = novoEmail;
    };
    getEmail():string{
        return this._email;
    };
    setSenha(novaSenha:string):void{
        this._senha = novaSenha;
    };
    getSenha():string{
        return this._senha;
    };
    getId():number{
        return this._id
    }
    getNome(): string {
    return this._nome;
    }
    setNome(novoNome: string): void {
        this._nome = novoNome;
    }
    

    abstract visualizarDashBord():void

    
}; 