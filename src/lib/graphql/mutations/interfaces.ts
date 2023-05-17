export interface Input<T> {
  input: T;
}

export interface CreateUserInput {
  username: string;
  password: string;
  nickname: string;
  imageUrl: string | null;
  email: string;
}
