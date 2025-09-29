import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locadora } from '../../models/Locadora/locadoras.model';
import { Response } from '../../models/Response';
import { CreateLocadora } from 'src/app/models/Locadora/locadora.create.model';
import { UpdateLocadora } from 'src/app/models/Locadora/locadora.updade.model';


@Injectable({
  providedIn: 'root'
})
export class LocadoraService {

  private apiUrl = `${environment.ApiUrl}/Locadora`

  constructor(private http: HttpClient) { }

  getLocadoras(): Observable<Response<Locadora[]>> {
    return this.http.get<Response<Locadora[]>>(this.apiUrl);
  }

  getLocadoraById(id: string) {
  return this.http.get<Response<Locadora>>(`${this.apiUrl}/${id}/busca-por-id`);
}

   createLocadora(locadora: CreateLocadora): Observable<Locadora> {
    return this.http.post<Locadora>(this.apiUrl, locadora);
  }

updateLocadora(id: string, locadora: UpdateLocadora): Observable<CreateLocadora> {
  return this.http.put<CreateLocadora>(`${this.apiUrl}/${id}`, locadora);
}

  // deleteLocadora(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }

}
