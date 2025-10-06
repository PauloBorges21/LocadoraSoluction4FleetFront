import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/locadora/cadastro/cadastro.component';
import { EditarComponent } from './pages/locadora/editar/editar.component';
import { MontadoraListagemComponent } from './pages/montadora/listagem/listagem.component';
import { MontadoraEditarComponent } from './pages/montadora/editar/editar.component';
import { MontadoraCadastroComponent } from './pages/montadora/cadastro/cadastro.component';
import { VeiculoListagemComponent } from './pages/veiculo/listagem/listagem.component';
import { VeiculoCadastroComponent } from './pages/veiculo/cadastro/cadastro.component';

import { ModeloListagemComponent } from './pages/modelo/listagem/listagem.component';
import { ModeloEditarComponent } from './pages/modelo/editar/editar.component';
import { ModeloCadastroComponent } from './pages/modelo/cadastro/cadastro.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  //Locadora
  { path: 'locadora/cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
  { path: 'locadora/editar/:id', component: EditarComponent, canActivate: [AuthGuard] },

  //Montadora
  { path: 'montadora', component: MontadoraListagemComponent, canActivate: [AuthGuard] },
  { path: 'montadora/cadastro', component: MontadoraCadastroComponent, canActivate: [AuthGuard] },
  { path: 'montadora/editar/:id', component: MontadoraEditarComponent, canActivate: [AuthGuard] },

  //Veiculo
  { path: 'veiculo', component: VeiculoListagemComponent, canActivate: [AuthGuard] },
  { path: 'veiculo/cadastro', component: VeiculoCadastroComponent, canActivate: [AuthGuard] },

  // Modelo
  { path: 'modelo', component: ModeloListagemComponent, canActivate: [AuthGuard] },
  { path: 'modelo/cadastro', component: ModeloCadastroComponent, canActivate: [AuthGuard] },
  { path: 'modelo/editar/:id', component: ModeloEditarComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'home' } // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
