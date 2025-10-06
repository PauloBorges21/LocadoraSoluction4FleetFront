<<<<<<< Updated upstream
export interface LoginRequest {
  email: string;
  senha: string;
=======
export interface LoginResponse {
  idUsuario: string;
  email: string;
  perfil: string;
  token?: string;
>>>>>>> Stashed changes
}
