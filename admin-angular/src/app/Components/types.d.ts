export interface User {
  username: string,
  fullname: string,
  photo: string,
  email: string,
  birthdate: string,
  password: string,
  create_at:number,
  is_active: boolean,
  count:number,
  [key: string]: any,
}

