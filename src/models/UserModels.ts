export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  role: string;
  gender: string;
  phone: string;
  birthDate: string;
  username: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface SearchResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}