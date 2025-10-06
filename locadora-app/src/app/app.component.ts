import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locadora-app';

  constructor(private router: Router) {}

  logout() {
    // Limpa apenas os itens de login (ou localStorage.clear() para limpar tudo)
    localStorage.removeItem('token');
    localStorage.removeItem('idUsuario');

    // Redireciona para a tela de login
    this.router.navigate(['/login']);
  }
}
