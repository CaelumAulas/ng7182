import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'filtrarPorTitulo'
})
export class FiltrarPorTitulo implements PipeTransform {

    
    transform(fotos: FotoComponent[], textoDigitado: string) {

        return fotos.filter(
                    foto => foto.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
                )
    
    }


}