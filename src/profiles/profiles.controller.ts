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
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Public } from '../auth/public.decorator';
@Public()
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  private readonly notFound = (id: string) => {
    throw new HttpException(`The profile with id #${id} was not found!`, 404);
  };

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id).catch((err) => this.notFound(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService
      .update(+id, updateProfileDto)
      .catch((err) => this.notFound(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id).catch((err) => this.notFound(id));
  }
}
