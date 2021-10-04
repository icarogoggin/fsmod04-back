import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateGameDto) {
    return this.prisma.game.create({ data });
  }

  findAll() {
    return this.prisma.game.findMany({
      include: {
        favorites: { include: { profile: true } },
        genres: { include: { genre: true } },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  }

  async update(id: number, data: UpdateGameDto) {
    return this.prisma.game.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.game.delete({ where: { id } });
  }
}