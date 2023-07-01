import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MestreComponent } from './mestre/mestre.component';
import { DetalheComponent } from './detalhe/detalhe.component';



@NgModule({
  declarations: [
    MestreComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MestreComponent,
    DetalheComponent
  ]
})
export class MestredetalheModule { }
