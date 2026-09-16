export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export type RequestStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'empty'
  | 'error';