export class CreateUsersDto {
  readonly postID: number;
  readonly username: string;
  readonly dateCreated: string;
  readonly dateModified: string;
  readonly image: string;
  readonly title: string;
  readonly description: string;
  readonly tags: [string];
}