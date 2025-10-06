import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './pages/locadora/cadastro/cadastro.component';
import { ListagemComponent } from './pages/locadora/listagem/listagem.component';
import { EditarComponent } from './pages/locadora/editar/editar.component';

import { MontadoraCadastroComponent } from './pages/montadora/cadastro/cadastro.component';
import { MontadoraListagemComponent } from './pages/montadora/listagem/listagem.component';
import { MontadoraEditarComponent } from './pages/montadora/editar/editar.component';

import { VeiculoListagemComponent } from './pages/veiculo/listagem/listagem.component';
import { VeiculoCadastroComponent } from './pages/veiculo/cadastro/cadastro.component';


import { LoginComponent } from './pages/login/login.component';
import { ModeloListagemComponent } from './pages/modelo/listagem/listagem.component';
import { ModeloCadastroComponent } from './pages/modelo/cadastro/cadastro.component'; 
import { ModeloEditarComponent } from './pages/modelo/editar/editar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ListagemComponent,
    EditarComponent,
    MontadoraListagemComponent,
    MontadoraCadastroComponent,
    MontadoraEditarComponent,
    VeiculoCadastroComponent,
    VeiculoListagemComponent,
    LoginComponent,
    ModeloListagemComponent,
    ModeloCadastroComponent,
    ModeloEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
