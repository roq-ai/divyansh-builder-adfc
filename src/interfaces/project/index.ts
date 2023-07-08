import { CompanyInterface } from 'interfaces/company';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  company_id?: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  client?: ClientInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  client_id?: string;
}
