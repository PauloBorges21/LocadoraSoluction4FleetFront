import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {LoginRequest} from "../../models/Login/login.request.model";
import {LoginResponse} from "../../models/Login/login.response.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../../models/Response";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.ApiUrl}/Auth`

  constructor(private http: HttpClient) {
  }

  login(dados: LoginRequest): Observable<Response<LoginResponse>> {
    return this.http.post<Response<LoginResponse>>(`${this.apiUrl}/login`, dados);
  }
}


