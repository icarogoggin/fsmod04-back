import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateGenreDto) {
    return this.prisma.genre.create({ data });
  }

  findAll() {
    return this.prisma.genre.findMany({
      include: { games: { include: { game: true } } },
    });
  }

  async findOne(id: number) {
    return this.prisma.genre.findFirst({
      where: { id },
      include: { games: true },
      rejectOnNotFound: true,
    });
  }

  async update(id: number, data: UpdateGenreDto) {
    return this.prisma.genre.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.genre.delete({ where: { id } });
  }
}