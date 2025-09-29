import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Montadora } from 'src/app/models/Montadora/montadora.model';
import { CreateMontadora } from 'src/app/models/Montadora/montadora.create.model';
import { UpdateMontadora } from 'src/app/models/Montadora/montadora.update.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MontadoraService {

private apiUrl = `${environment.ApiUrl}/Montadora`;

  constructor(private http: HttpClient) { }

  getMontadoras(): Observable<Montadora[]> {
    return this.http.get<Montadora[]>(this.apiUrl);
  }

  getMontadoraById(id: string): Observable<Montadora> {
    return this.http.get<Montadora>(`${this.apiUrl}/${id}/busca-por-id`);
  }

createMontadora(payload: { montadoras: CreateMontadora[] }): Observable<any> {
  return this.http.post(this.apiUrl, payload);
}


  updateMontadora(id: string, montadora: UpdateMontadora): Observable<Montadora> {
    return this.http.put<Montadora>(`${this.apiUrl}/${id}`, montadora);
  }

  deleteMontadora(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
