import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Public } from '../auth/public.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  private readonly notFound = (id: string) => {
    throw new HttpException(`The game with #${id} id was not.`, 404);
  };

  @Post()
  create(@CurrentUser() usuario: User, @Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.gamesService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id).catch((error) => this.notFound(id));
  }

  @Patch(':id')
  update(
    @CurrentUser() usuario: User,
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    return this.gamesService
      .update(+id, updateGameDto)
      .catch((error) => this.notFound(id));
  }

  @Delete(':id')
  remove(@CurrentUser() usuario: User, @Param('id') id: string) {
    return this.gamesService.remove(+id).catch((error) => this.notFound(id));
  }
}
