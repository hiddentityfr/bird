import { GenericPagination, Node, PaginationFilterInput } from '../GraphQL';

import type { TeamConnection } from '../Team';
import type { IUser } from '../User';
import type { InvitationConnection } from '../Invitation';
import type { OfferConnection } from '../Offer';

export interface ICompany extends Node {
  name: string;
  siret: string;
  createdAt: Date;
  updatedAt: Date;
  members: CompanyUserConnection;
  teams: TeamConnection;
  invitations: InvitationConnection;
  offers: OfferConnection;
}

export type CompanyUser = Omit<IUser, 'birthdate' | 'verified'>;

export type CompanyUserConnection = GenericPagination<CompanyUser>;
export type CompaniesConnection = GenericPagination<ICompany>;

export type CompanyUserVars = Partial<Node>;
export type CompanyUserResponse = { companyUser: CompanyUser };

export type CompanyVars = undefined;
export type CompanyResponse = { company: ICompany };

export type CompaniesVars = PaginationFilterInput;
export type CompaniesResponse = { companies: CompaniesConnection };
