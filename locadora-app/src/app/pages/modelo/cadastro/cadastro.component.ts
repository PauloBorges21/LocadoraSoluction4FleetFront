import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateModelo } from 'src/app/models/Modelo/modelo.create.model';
import { ModeloService } from 'src/app/services/modelo/modelo.service';
import { MontadoraService } from 'src/app/services/montadora/montadora.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class ModeloCadastroComponent {

  montadoras: any[] = [];
  modelos: any[] = [];

  modelo: CreateModelo = {
    nome: '',
    montadoraId: ''
  };

  constructor(private montadoraService: MontadoraService, private modeloService: ModeloService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadMontadoras();
    //this.loadModelos();
  }

  loadMontadoras(): void {
    this.montadoraService.getMontadoras().subscribe({
      next: (res: any) => {
        // extrai a lista dentro de 'data'
        this.montadoras = res.data ?? [];
      },
      error: (err) => console.error('Erro ao carregar locadoras', err)
    });
  }

  onMontadorasChange(): void {
    const mon = this.montadoras.find(m => m.id === this.modelo.montadoraId);
    this.modelo.nome = mon ? mon.nome : '';
  }

  salvar(): void {
    const payload = { modelo: this.modelo };

    this.modeloService.CreateModelo(payload).subscribe({
      next: () => {
        this.snackBar.open('Modelo criado com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/modelo']);
      },
      error: () =>
        this.snackBar.open('Erro ao criar veículo.', 'Fechar', { duration: 3000 })
    });
  }

}


