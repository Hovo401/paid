interface userCart {
  id: number;
  name: string;
  firstName?: string;
  email?: string;
  age?: number;
  Bio?: string;
  avatarURL?: string;
  rating?: number;
  pricePerOneMessage?: number;
  location?: string;
  profession?: string;

  hor?: number;
  gender?: string;
  roles?: string;
  createdAt?: string;

  inbox?: string;
  send?: string;
  draft?: string;
}

// interface userDB extends userCart {
//   id: number;
//   name: string;
//   firstName: string;
//   email: string;
//   age?: number;
//   Bio?: string;
//   avatarURL?: string;
//   rating?: number;
//   pricePerOneMessage?: number;
//   location?: string;
//   profession?: string;

//   hor?: number;
//   gender?: string;
//   roles?: string;
//   createdAt?: string;

//   inbox?: string;
//   send?: string;
//   draft?: string;
// }

export type { userCart };
