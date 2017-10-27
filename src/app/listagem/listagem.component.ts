import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../servicos/foto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styles: [`
    .row {
      margin-bottom: 20px;  
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class ListagemComponent {

  title = 'app';
  fotos: FotoComponent[] = []
  mensagem: string = ''

  constructor(private servico: FotoService) {
    servico.listar()
           .subscribe(
              resposta => this.fotos = resposta.json()
              , erro => console.log(erro)
            )

  }

  apagar(foto: FotoComponent): void {

    this.servico.deletar(foto)
                .subscribe(
                  () => {
                    this.mensagem = `Foto ${foto.titulo} foi apagada com sucesso`

                    setTimeout(
                      () => this.mensagem = '' 
                      , 3000
                    )
                    
                    this.fotos = this.fotos
                                     .filter(
                                       elemento => elemento._id != foto._id
                                      )
                  }                
                )
    
  }
}