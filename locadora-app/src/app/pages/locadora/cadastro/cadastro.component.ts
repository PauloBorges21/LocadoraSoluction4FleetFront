import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateLocadora } from 'src/app/models/Locadora/locadora.create.model';
import { LocadoraService } from 'src/app/services/locadora/locadora.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  locadora: CreateLocadora = {
    nomeFantasia: '',
    razaoSocial: '',
    cnpj: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    estado: '',
    cidade: ''
  };

  constructor(
    private locadoraService: LocadoraService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  salvarLocadora() {
    this.locadoraService.createLocadora(this.locadora).subscribe({
      next: (res) => {
        this.snackBar.open('Locadora criada com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/home']);
      },
      error: (err) => { this.snackBar.open('Erro ao criar locadora.', 'Fechar', { duration: 3000 }); }
    });
  }
}