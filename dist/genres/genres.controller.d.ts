import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGenreDto: UpdateGenreDto): string;
    remove(id: string): string;
}
