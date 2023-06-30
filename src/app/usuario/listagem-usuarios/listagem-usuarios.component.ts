import {Component} from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {map, Observable} from 'rxjs';
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent {

  usuarios: Observable<Usuario[]>;
  quantidadeDeUsuarios: Observable<number>;

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = usuarioService.listar();
    this.quantidadeDeUsuarios =
      this.usuarios.pipe(map(usuarios => usuarios.length));
  }

  excluir(usuarioARemover: Usuario): void {
    if (usuarioARemover.id) {
      this.usuarioService.apagar(usuarioARemover.id).subscribe(
        usuarioRemovido => {
          this.usuarios = this.usuarios.pipe(
            map(usuarios => usuarios.filter(usuario => usuario.id !== usuarioARemover.id))
          );
        }
      );
    }

  }

}
