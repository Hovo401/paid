import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client'; // ← новый путь
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const url = process.env.DATABASE_URL;
    // Must be absolute: the CLI (prisma db push) uses a different sqlite
    // driver than this adapter and a relative path can resolve to a
    // different file between the two, leaving this one pointed at an
    // empty db.
    if (!url?.startsWith('file:/')) {
      throw new Error(
        `DATABASE_URL must be an absolute file: path, got: ${url ?? '(unset)'}`,
      );
    }

    const adapter = new PrismaLibSql({
      // ← PrismaLibSql
      url,
      // authToken: process.env.TURSO_AUTH_TOKEN, // если Turso
    }); // ← тоже меняем на PrismaLibSQL
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
