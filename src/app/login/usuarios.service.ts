import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './model/IUsuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
/*
  private URL: string = 'http://localhost:8080/usuario';
*/
  constructor(private http: HttpClient) { }
/*
 cadastrar(usuario: IUsuario): Observable<IUsuario>{
    return this.http.post<IUsuario>(this.URL, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
  */
}
