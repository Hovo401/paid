interface user extends userCart{
    id: number;
    name: string;
    firstName: string;
    age: number;
    Bio: string;
    AvatarURL: string;
    rating: number;
    pricePerOneMessage: number;
    location: string;
    profession: string;
    hor: number
  }

  interface userCart  {
    id: number;
    name: string;
    firstName?: string;
    age?: number;
    Bio?: string;
    AvatarURL?: string;
    rating?: number;
    pricePerOneMessage?: number;
    location?: string;
    profession?: string;
    hor?: number
  }

  export type { userCart, user };