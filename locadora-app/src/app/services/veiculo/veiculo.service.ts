import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/models/Veiculo/veiculo.model';
import { Response } from '../../models/Response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = `${environment.ApiUrl}/Veiculo`;

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Response<Veiculo[]>> {
    return this.http.get<Response<Veiculo[]>>(this.apiUrl);
  }



  getVeiculoById(id: string): Observable<Response<Veiculo>> {
    return this.http.get<Response<Veiculo>>(`${this.apiUrl}/${id}`);    
  }

  createVeiculo(payload: { veiculos: Veiculo[] }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }


}
