import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from 'src/app/models/Modelo/modelo.model';
import { environment } from 'src/environments/environment';
import { Response } from '../../models/Response';

@Injectable({
  providedIn: 'root'
})

export class ModeloService {
  private apiUrl = `${environment.ApiUrl}/Modelo`;

  constructor(private http: HttpClient) { }

  CreateModelo(payload: { modelo: Modelo }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
  getModelos(): Observable<Response<Modelo[]>> {
    return this.http.get<Response<Modelo[]>>(this.apiUrl);
  }

  //   getModeloById(id: string) {
  //   return this.http.get<Response<Modelo>>(`${this.apiUrl}/${id}/busca-por-id`);
  // }


}
