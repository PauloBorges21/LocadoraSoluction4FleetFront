import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/Veiculo/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class VeiculoListagemComponent implements OnInit {
  displayedColumns: string[] = [
    'nomeLocadoura',
    'nomeMontadora',
    'nomeModelo',
    'placa',
    'status',
    'actions'
  ];
  veiculos: Veiculo[] = [];

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

    ngOnInit(): void {
    this.veiculoService.getVeiculos().subscribe(data => {
      
      const dados = data.data
      this.veiculos = dados;      
    });
  }
}

