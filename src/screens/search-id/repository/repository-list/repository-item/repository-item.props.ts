export interface RepositoryItemProps {
  id?: string;

  full_name: string;

  owner: any;

  language: string;

  stargazers_count: string;

  description: string;

  updated_at: string | Date;
}