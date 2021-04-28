import { Node } from '../GraphQL';

export interface IUser extends Node {
  email: string;
  lastname?: string;
  firstname?: string;
  birthdate?: Date;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  verified: boolean;
}

export type UserVars = undefined;
export type UserResponse = { user: IUser };
