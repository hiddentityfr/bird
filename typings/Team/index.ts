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
export type TeamResponse = { team: ITeam };

export type TeamsVars = PaginationFilterInput;
export type TeamsResponse = { teams: TeamConnection };

interface CreateTeamInput {
  name: string;
  companyID: string;
}
export type CreateTeamVars = { input: CreateTeamInput };
export type CreateTeamResponse = { createTeam: ITeam };

export type DeleteTeamVars = Node;
export type DeleteTeamResponse = { deleteTeam: boolean };

export type AddCompanyUserToTeamVars = Node & { userID: string };
