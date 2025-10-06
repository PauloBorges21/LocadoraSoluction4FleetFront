import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin!: FormGroup;
  hide = true;
  carregando = false;
  erro = '';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.formLogin.invalid) return;
    this.carregando = true;
    this.erro = '';

    this.loginService.login(this.formLogin.value).subscribe({
      next: (res) => {
        if (res.success) {
          localStorage.setItem('token', res.data.token!);
          localStorage.setItem('idUsuario', res.data.idUsuario!);
          this.router.navigate(['/home']);
        } else {
          this.snackBar.open(res.message, 'Fechar', { duration: 3000, panelClass: ['snack-error'] });
        }
        this.carregando = false;
      },
      error: (err) => {
        this.snackBar.open('Erro ao conectar com o servidor.', 'Fechar', { duration: 3000, panelClass: ['snack-error'] });
        this.carregando = false;
      }
    });
  }
}

