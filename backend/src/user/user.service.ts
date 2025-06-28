// src/User/User.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { signInDto } from 'src/auth/dto/signInDto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(name: string, email: string, password: string) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  updateUser(id: number, body: signInDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: body.name,
        firstName: body.firstName,
        email: body.email,
        password: body.password,
        location: body.location,
        avatarURL: body.avatarURL,
        profession: body.profession,
        Bio: body.Bio,
        hor: body.hor,
        rating: body.rating,
        age: body.age,
        pricePerOneMessage: body.pricePerOneMessage,
      },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
