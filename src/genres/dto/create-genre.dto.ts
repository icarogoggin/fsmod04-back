import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Genre } from '../entities/genre.entity';
import { Prisma } from '.prisma/client';

export class CreateGenreDto extends Genre {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsOptional()
  games?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGenreInput;
}