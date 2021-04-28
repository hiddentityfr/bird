import { GenericPagination, Node, PaginationFilterInput } from '../GraphQL';

import type { ICompany, CompanyUserConnection } from '../Company';

export interface ITeam extends Node {
  company: ICompany;
  users: CompanyUserConnection;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TeamConnection = GenericPagination<ITeam>;

export type TeamVars = Partial<Node>;
export type TeamResponse = { company: GenericPagination<ITeam> };

export type TeamsVars = PaginationFilterInput;
export type TeamsResponse = { teams: TeamConnection };
