import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  name: string;
  contact_info?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  project?: ProjectInterface[];
  user?: UserInterface;
  _count?: {
    project?: number;
  };
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact_info?: string;
  user_id?: string;
}
