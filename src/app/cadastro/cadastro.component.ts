import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {

  foto = new FotoComponent()

  constructor(){}

  salvar(evento: Event){

    evento.preventDefault()

    
    
  }

}
