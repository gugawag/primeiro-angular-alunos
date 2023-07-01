import { Component } from '@angular/core';
import {Usuario} from "../../shared/modelo/usuario";

@Component({
  selector: 'app-mestre',
  templateUrl: './mestre.component.html',
  styleUrls: ['./mestre.component.css']
})
export class MestreComponent {

  itens: Usuario[];
  usuarioSelecionado: Usuario | undefined;

  constructor() {
    this.itens = [
      new Usuario(1, {nome: 'João', cpf: '12345678901', idade: 20}),
      new Usuario(2, {nome: 'José', cpf: '22345678901', idade: 25}),
      new Usuario(3, {nome: 'Maria', cpf: '32345678901', idade: 30}),
    ]
  }

  selecionarItem(usuarioSelecionado: Usuario): void {
    this.usuarioSelecionado = usuarioSelecionado;
  }

  remover(usuarioSelecionado: Usuario | undefined) {
    console.log('Removido usuário');
    const usuarioEncontrado = this.itens.findIndex(usuario => usuario.id === usuarioSelecionado?.id);
    if (usuarioEncontrado > -1) {
      this.itens.splice(usuarioEncontrado, 1);
      this.usuarioSelecionado = undefined;
    }
  }

  editar(usuarioAlterado: Usuario) {
    console.log('Editado usuário:', usuarioAlterado);
  }
}
