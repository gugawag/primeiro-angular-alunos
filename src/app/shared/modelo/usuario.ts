export class Usuario {

  id?: number;
  nome = '';
  cpf = '';
  idade?: number;


  constructor(id?: number, usuario: Usuario = {nome: '', cpf: ''}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.nome = usuario.nome;
    this.idade = usuario.idade;
  }
}
