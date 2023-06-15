import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {map, Observable} from 'rxjs';
import {UsuarioFirestoreService} from '../../shared/services/usuario-firestore.service';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent {

  usuarios: Observable<Usuario[]>;
  quantidadeDeUsuarios: Observable<number>;

  constructor(private usuarioService: UsuarioFirestoreService) {
    this.usuarios = usuarioService.listar();
    this.quantidadeDeUsuarios = this.usuarios.pipe(map(usuarios => usuarios.length));
  }

  excluir(usuarioARemover: Usuario): void {
    if (usuarioARemover.id) {
      this.usuarioService.apagar(usuarioARemover.id).subscribe(
        usuarioRemovido => {}
      );
    }

  }

}
