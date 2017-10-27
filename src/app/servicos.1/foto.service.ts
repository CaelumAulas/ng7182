import { FotoComponent } from './../foto/foto.component'
import { Http, Headers, Response } from "@angular/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FotoService {

    private readonly url: string = 'http://localhost:3000/v1/fotos/'
    
    cabecalho = new Headers()

    constructor(private conexaoApi: Http){
        this.cabecalho.append('Content-Type', 'application/json')
    }

    listar(): Observable<Response>{
        return this.conexaoApi.get(this.url)        
    }

    cadastrar(foto: FotoComponent): Observable<Response>{

        return this.conexaoApi.post(
                        this.url
                        ,JSON.stringify(foto)
                        ,{
                          headers: this.cabecalho
                        }
                      )
    
    }

    deletar(foto: FotoComponent): Observable<Response> {
        return this.conexaoApi.delete(this.url+foto._id)
    }

    atualizar(){}

    buscarPorId(){}
}