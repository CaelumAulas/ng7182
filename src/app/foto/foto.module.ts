import { FiltrarPorTitulo } from './foto.pipe';
import { NgModule } from '@angular/core';
import { FotoComponent } from "./foto.component";

@NgModule({
  declarations: [FotoComponent, FiltrarPorTitulo],
  exports: [FotoComponent, FiltrarPorTitulo]
})
export class FotoModule { }