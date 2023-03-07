export interface User {
  username: string,
  fullName: string,
  photo: string,
  email: string,
  birthDate: string,
  password: string,
  accountStatus: boolean,

  [key: string]: any,
}

