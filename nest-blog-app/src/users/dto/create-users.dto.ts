export class CreateUsersDto {
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly email: string;
  readonly role: string;
}