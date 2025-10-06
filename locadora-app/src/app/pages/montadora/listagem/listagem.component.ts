import { Component, OnInit } from '@angular/core';
import { MontadoraService } from 'src/app/services/montadora/montadora.service';
import { Montadora } from 'src/app/models/Montadora/montadora.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem-montadora',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class MontadoraListagemComponent implements OnInit {

  montadoras: Montadora[] = [];

  constructor(
    private montadoraService: MontadoraService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.carregarMontadoras();
  }

carregarMontadoras(): void {
  this.montadoraService.getMontadoras().subscribe({
    next: (response) => {
      if (response.success && response.data) {
        this.montadoras = response.data;
      } else {
        this.snackBar.open(response.message || 'Nenhuma montadora encontrada.', 'Fechar', {
          duration: 3000
        });
      }
    },
    error: (err) => {
      console.error('Erro ao buscar montadoras:', err);
      this.snackBar.open('Erro ao carregar montadoras.', 'Fechar', {
        duration: 3000
      });
    }
  });
}


  editar(id: string) {
    this.router.navigate(['/montadora/editar', id]);
  }

  excluir(id: string) {
    if (confirm('Deseja realmente excluir esta montadora?')) {
      this.montadoraService.deleteMontadora(id).subscribe({
        next: () => this.carregarMontadoras()
      });
    }
  }
}
