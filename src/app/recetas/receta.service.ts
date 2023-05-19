import { Injectable } from '@angular/core';
import { Receta } from './receta';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiUrl);
  }

}
