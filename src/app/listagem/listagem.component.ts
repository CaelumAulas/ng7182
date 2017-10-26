import { FotoService } from './../servicos/foto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {

  title = 'app';
  fotos: Object[] = []

  constructor(servico: FotoService) {
    servico.listar()
           .subscribe(
              resposta => this.fotos = resposta.json()
              , erro => console.log(erro)
            )

  }

}
