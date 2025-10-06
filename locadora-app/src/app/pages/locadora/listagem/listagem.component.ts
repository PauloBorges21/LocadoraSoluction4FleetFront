import {Component, OnInit} from '@angular/core';
import { Locadora } from 'src/app/models/Locadora/locadoras.model';
import { LocadoraService } from 'src/app/services/locadora/locadora.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  locadoras: Locadora[] = [];
  locadorasGeral: Locadora[] = [];

  constructor(private locadoraService: LocadoraService) {
  }

  ngOnInit(): void {
    this.locadoraService.getLocadoras().subscribe(data => {

      const dados = data.data

      this.locadoras = dados;
      this.locadorasGeral = dados;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.locadoras = this.locadorasGeral.filter(locadora => {
      return locadora.nomeFantasia.toLocaleLowerCase().includes(value);
    })

  }
}
