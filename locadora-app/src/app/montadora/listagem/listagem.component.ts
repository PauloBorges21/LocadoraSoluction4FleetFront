import { Component, OnInit } from '@angular/core';
import { MontadoraService } from 'src/app/services/montadora/montadora.service';
import { Montadora } from 'src/app/models/Montadora/montadora.model';
import { ActivatedRoute, Router } from '@angular/router';
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
    //private router: Router
     //private route: ActivatedRoute,    
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.carregarMontadoras();
  }

  carregarMontadoras() {
    this.montadoraService.getMontadoras().subscribe({
      next: data => this.montadoras = data
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
