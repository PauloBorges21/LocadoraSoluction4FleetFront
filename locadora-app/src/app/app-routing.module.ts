import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './locadora/cadastro/cadastro.component';
import { EditarComponent } from './locadora/editar/editar.component';
import { MontadoraListagemComponent } from './montadora/listagem/listagem.component';
import { MontadoraEditarComponent } from './montadora/editar/editar.component';
import { MontadoraCadastroComponent } from './montadora/cadastro/cadastro.component';
// import { CadastroComponent as MontadoraCadastroComponent } from './montadora/cadastro/cadastro.component';
import { VeiculoListagemComponent } from './veiculo/listagem/listagem.component';
import { VeiculoCadastroComponent } from './veiculo/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //Locadora
  { path: 'locadora/cadastro', component: CadastroComponent },
  { path: 'locadora/editar/:id', component: EditarComponent },

  //Montadora
  { path: 'montadora', component: MontadoraListagemComponent },
  { path: 'montadora/cadastro', component: MontadoraCadastroComponent },
  { path: 'montadora/editar/:id', component: MontadoraEditarComponent },  
  { path: 'veiculos', component: VeiculoListagemComponent },
  { path: 'veiculos/cadastro', component: VeiculoCadastroComponent },
  // { path: 'montadoras', component: MontadorasComponent },
  // { path: 'modelos', component: ModelosComponent },

  { path: '**', redirectTo: 'home' } // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
