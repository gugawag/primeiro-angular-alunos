import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Usuario} from "../../shared/modelo/usuario";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {

  @Input()
  item: Usuario | undefined;

  @Output() itemRemovido = new EventEmitter<void>();
  @Output() itemAlterado = new EventEmitter<Usuario>();

  remover(): void {
    this.item = undefined;
    this.itemRemovido.emit();
  }

  editar(): void {
    if (this.item) {
      this.item.nome = this.item?.nome + ' Editado';
    }
    this.itemAlterado.emit(this.item);
  }
}
