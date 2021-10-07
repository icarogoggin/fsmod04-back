import { Genre } from '../entities/genre.entity';
import { Prisma } from '.prisma/client';
export declare class CreateGenreDto extends Genre {
    name: string;
    games?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGenreInput;
}
