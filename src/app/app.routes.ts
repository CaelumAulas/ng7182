import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { Routes, RouterModule } from "@angular/router";

const rotas: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', redirectTo: ''}
]

export const roteamento = RouterModule.forRoot(rotas)