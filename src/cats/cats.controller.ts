import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'getAllCat';
  }

  @Get(':id')
  getOneCat() {
    return 'getOneCat';
  }

  @Post()
  createCat() {
    return 'createCat';
  }

  @Put(':id')
  updateCat() {
    return 'updateCat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'updatePartialCat';
  }

  @Delete(':id')
  deleteCat() {
    return 'deleteCat';
  }
}
