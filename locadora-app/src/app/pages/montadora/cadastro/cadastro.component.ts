import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MontadoraService } from 'src/app/services/montadora/montadora.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateMontadora } from 'src/app/models/Montadora/montadora.create.model';

@Component({
  selector: 'app-cadastro-montadora',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class MontadoraCadastroComponent {
  montadora: CreateMontadora = {
    nome: '',
    paisOrigem: '',
    anoFundacao: 0
  };

  constructor(
    private montadoraService: MontadoraService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  salvar() {
    const payload = {
      montadoras: [this.montadora]   
    };

    this.montadoraService.createMontadora(payload).subscribe({
      next: () => {
        this.snackBar.open('Montadora criada com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/montadora']);
      },
      error: () => this.snackBar.open('Erro ao criar montadora.', 'Fechar', { duration: 3000 })
    });
  }
}
