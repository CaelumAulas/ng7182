import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
  
  @Input() titulo: string = ''
  
  ngOnInit(){
    
    if(this.titulo.length > 7){
      this.titulo = this.titulo.substring(0,7)+'...'
    }

  }

}
