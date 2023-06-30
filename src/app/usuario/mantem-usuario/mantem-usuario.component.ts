import { Component } from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../../shared/services/usuario.service';
import {IMensagem} from '../../shared/modelo/IMensagem';

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.css']
})
export class MantemUsuarioComponent {

  usuarioDeManutencao: Usuario;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router,
              private usuarioService: UsuarioService, private mensagemService: IMensagem) {
    this.usuarioDeManutencao = new Usuario();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.usuarioService.pesquisarPorId(Number(idParaEdicao)).subscribe(
        usuarioRetornado => {
          this.usuarioDeManutencao = usuarioRetornado;
          this.estahCadastrando = false;
          this.nomeBotaoManutencao = 'Salvar';
        }
    );
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.usuarioDeManutencao) {
      this.usuarioService.inserir(this.usuarioDeManutencao).subscribe(
        usuarioInserido => this.mensagemService.sucesso('Usuário cadastrado com sucesso!')
      );
    } else {
      this.usuarioService.atualizar(this.usuarioDeManutencao).subscribe(
        usuarioAtualizado => this.mensagemService.erro('Usuário atualizado com sucesso!')
      );
    }
    this.usuarioDeManutencao = new Usuario();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemusuarios']);
  }

}
