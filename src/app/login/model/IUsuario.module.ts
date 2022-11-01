import { NgModule } from '@angular/core';
export interface IUsuario{
  id?: number;
  email: string;
  nome: string;
  sobrenome: string;
  fone: number;
  senha: string;
  confirmasenha: string;
}
