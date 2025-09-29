import { Endereco } from './endereco.model';

export interface Locadora {
    id?: string; // GUID vem como string no JSON
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    email: string;
    telefone: string;    
    endereco: Endereco; // composição
}