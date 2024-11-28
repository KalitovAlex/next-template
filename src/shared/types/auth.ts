export interface Person {
  firstName: string;
  lastName: string;
  patronymic: string;
}

export interface SignUpDto {
  email: string;
  password: string;
  person: Person;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  person: Person;
} 