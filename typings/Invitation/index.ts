import { Node } from '../GraphQL';

import type { ICompany, CompanyUser } from '../Company';

export interface IInvitation extends Node {
  firstname: string | null;
  lastname: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  from: CompanyUser;
  company: ICompany;
}

export type InvitationVars = Partial<Node>;
export type InvitationResponse = { invitation: IInvitation };
