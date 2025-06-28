interface signInDto {
  id: number;
  name: string;
  email: string;
  password: string;

  firstName?: string;

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

export type { signInDto };
