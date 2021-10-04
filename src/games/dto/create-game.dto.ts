import { Prisma } from '.prisma/client'
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Game } from '../entities/game.entity'
export class CreateGameDto extends Game {
    @IsString()
    @IsNotEmpty()
    title: string
    @IsString()
    @IsNotEmpty()
    cover: string
    @IsString()
    @IsNotEmpty()
    description: string
    @IsInt()
    @IsNotEmpty()
    year: number
    @IsNumber()
    @IsNotEmpty()
    imdb: number
    @IsString()
    @IsOptional()
    trailer?: string | null
    @IsString()
    @IsOptional()
    gameplay?: string | null
    @IsOptional()
    users?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutGameInput
    @IsOptional()
    genres?: Prisma.GenresOnGamesUncheckedCreateNestedManyWithoutGameInput
}