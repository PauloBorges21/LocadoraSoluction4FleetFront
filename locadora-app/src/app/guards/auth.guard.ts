import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    try {
      // Decodifica o token
      const decodedToken: any = jwtDecode(token);

      // Verifica se existe a data de expiração (exp)
      if (decodedToken.exp) {
        const now = Date.now().valueOf() / 1000;
        if (decodedToken.exp < now) {
          // Token expirado
          localStorage.removeItem('token');
          localStorage.removeItem('idUsuario');
          this.router.navigate(['/login']);
          return false;
        }
      }

      // Se chegou até aqui, token é válido
      return true;
    } catch (e) {
      // Caso o token seja inválido
      localStorage.removeItem('token');
      localStorage.removeItem('idUsuario');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
