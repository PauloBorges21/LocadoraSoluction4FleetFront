import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './locadora/cadastro/cadastro.component';
import { ListagemComponent } from './locadora/listagem/listagem.component';
import { EditarComponent } from './locadora/editar/editar.component';

import { MontadoraCadastroComponent } from './montadora/cadastro/cadastro.component';
import { MontadoraListagemComponent } from './montadora/listagem/listagem.component';
import { MontadoraEditarComponent } from './montadora/editar/editar.component';

import { VeiculoListagemComponent } from './veiculo/listagem/listagem.component';
import { VeiculoCadastroComponent } from './veiculo/cadastro/cadastro.component';
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
    VeiculoListagemComponent
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
