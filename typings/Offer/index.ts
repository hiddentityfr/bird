import { GenericPagination, Node, PaginationFilterInput } from '../GraphQL';

import { ICompany } from '../Company';

export enum ContractType {
  INTERNSHIP = 'INTERNSHIP',
  FIXED = 'FIXED',
  PERMANENT = 'PERMANENT',
}

export const contractMapping = {
  [ContractType.INTERNSHIP]: { label: 'Stage', color: '#A8E2FF' },
  [ContractType.FIXED]: { label: 'CDD', color: '#FFC9AD' },
  [ContractType.PERMANENT]: { label: 'CDI', color: '#E4C1F9' },
};

export interface IOffer extends Node {
  id: string;
  name: string;
  description: string;
  maxSalary: number;
  longitude: number;
  latitude: number;
  contractTypes: Array<ContractType>;
  createdAt: Date;
  updatedAt: Date;
  primaryCompetencies: Array<string>;
  secondaryCompetencies: Array<string>;
  company: ICompany;
}

export type OfferConnection = GenericPagination<IOffer>;

export type OfferVars = Partial<Node>;
export type OfferResponse = { offer: IOffer };

export type OffersVars = PaginationFilterInput;
export type OffersResponse = { offers: OfferConnection };

export interface CreateOfferInput {
  name: string;
  description: string;
  maxSalary: number;
  longitude: number;
  latitude: number;
  primaryCompetencies: Array<string>;
  secondaryCompetencies: Array<string>;
  contractTypes: Array<ContractType>;
}

export type CreateOfferVars = { input: CreateOfferInput };
export type CreateOfferResponse = { createOffer: IOffer };
