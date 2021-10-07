import { Prisma } from ".prisma/client";
export declare class Profile implements Prisma.ProfileUncheckedCreateInput {
    id?: number;
    title: string;
    image?: string;
    userId: number;
    favGames?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutProfileInput;
}
