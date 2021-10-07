import { Prisma } from '.prisma/client';
export declare class Game implements Prisma.GameUncheckedCreateInput {
    id?: number;
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailer?: string;
    gameplay?: string;
    users?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutGameInput;
    genres?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGameInput;
}
