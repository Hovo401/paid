export interface userDB {
  id: number;
  name: string;
  firstName: string;
  email: string;
  age: number;
  Bio: string;
  avatarURL: string;
  rating?: number;
  pricePerOneMessage?: number;
  location?: string;
  profession?: string;

  hor?: number;
  gender?: null;
  roles?: string;
  createdAt?: string;

  inbox: email[];
  send: email[];
  draft: email[];
}

export interface email {
  in: {
    id: number;
    email: string;
    name: string;
  };
  to: {
    id: number;
    email: string;
    name: string;
  };
  subject: string;
  message: string;
}

export interface mailLocalCloud {
  inbox: email[];
  send: email[];
  draft: email[];
}
