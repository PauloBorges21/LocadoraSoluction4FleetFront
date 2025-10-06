import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/Veiculo/veiculo.model';
import { LocadoraService } from 'src/app/services/locadora/locadora.service';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class VeiculoCadastroComponent {

  veiculo: Veiculo = {
    id: '',
    locadoraId: '',
    nomeLocadoura: '',
    status: 'Disponível',
    nomeMontadora: '',
    nomeModelo: '',
    numeroPortas: 4,
    cor: '',
    fabricante: '',
    anoModelo: new Date().getFullYear(),
    anoFabricacao: new Date().getFullYear(),
    placa: '',
    chassi: ''
  };

  locadoras: any[] = [];
  modelos: any[] = [];

  constructor(
    private veiculoService: VeiculoService,
    private locadoraService: LocadoraService,
    //private modeloService: ModeloService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadLocadoras();
    //this.loadModelos();
  }

loadLocadoras(): void {
  this.locadoraService.getLocadoras().subscribe({
    next: (res: any) => {
      // extrai a lista dentro de 'data'
      this.locadoras = res.data ?? [];
    },
    error: (err) => console.error('Erro ao carregar locadoras', err)
  });
}


  // loadModelos(): void {
  //   this.modeloService.getModelos().subscribe({
  //     next: (res) => this.modelos = res,
  //     error: (err) => console.error('Erro ao carregar modelos', err)
  //   });
  // }

  onLocadoraChange(): void {
    const loc = this.locadoras.find(l => l.id === this.veiculo.locadoraId);
    this.veiculo.nomeLocadoura = loc ? loc.nomeFantasia : '';
  }

  // onModeloChange(): void {
  //   const mod = this.modelos.find(m => m.id === this.veiculo.nomeModelo); // agora "nomeModelo" vai armazenar o ID
  //   if (mod) {
  //     this.veiculo.nomeModelo = mod.id;
  //     this.veiculo.nomeMontadora = mod.nomeMontadora;
  //   }
  // }

  salvar(): void {
    const payload = { veiculos: [this.veiculo] };

    this.veiculoService.createVeiculo(payload).subscribe({
      next: () => {
        this.snackBar.open('Veículo criado com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/veiculos']);
      },
      error: () =>
        this.snackBar.open('Erro ao criar veículo.', 'Fechar', { duration: 3000 })
    });
  }

}
