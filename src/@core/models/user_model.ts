export interface IUser {
  uuid: string;
  name: string;
  email: string;
}
export interface IUserFormValues {
  name: string;
  email: string;
  password: string;
  uuid?: string;
}
export class User implements IUser {
  uuid: string;
  name: string;
  email: string;

  constructor({ name, email, uuid }: IUser) {
    this.name = name;
    this.email = email;
    this.uuid = uuid;
  }
}
