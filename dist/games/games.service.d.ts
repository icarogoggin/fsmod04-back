import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        genres: (import(".prisma/client").GenresOnGames & {
            genre: import(".prisma/client").Genre;
        })[];
        favorites: (import(".prisma/client").GamesOnProfiles & {
            profile: import(".prisma/client").Profile;
        })[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Game>;
    update(id: number, data: UpdateGameDto): Promise<import(".prisma/client").Game>;
    remove(id: number): Promise<import(".prisma/client").Game>;
}
