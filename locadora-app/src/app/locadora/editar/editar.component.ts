import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocadoraService } from 'src/app/services/locadora/locadora.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateLocadora } from 'src/app/models/Locadora/locadora.updade.model';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  id!: string;
  locadora: UpdateLocadora = {
    id: '',
    nomeFantasia: '',
    cnpj: '',
    razaoSocial: '',
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
    private route: ActivatedRoute,
    private locadoraService: LocadoraService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Pega o ID da rota
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.carregarLocadora();
  }

  carregarLocadora() {
    this.locadoraService.getLocadoraById(this.id).subscribe({
      next: (res: any) => {
        this.locadora = res.data; // pega o objeto dentro de "data"
      },
      error: () => {
        this.snackBar.open('Erro ao carregar dados da locadora.', 'Fechar', { duration: 3000 });
        this.router.navigate(['/home']);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/home']);
  }

  salvarAlteracoes() {
    this.locadoraService.updateLocadora(this.id, this.locadora).subscribe({
      next: () => {
        this.snackBar.open('Locadora atualizada com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/home']);
      },
      error: () => {
        this.snackBar.open('Erro ao atualizar locadora.', 'Fechar', { duration: 3000 });
      }
    });
  }
}
