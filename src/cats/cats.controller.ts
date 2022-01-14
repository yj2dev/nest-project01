import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';
import { PositiveIntPipe } from '../common/pipes/positiveInt.pipe';

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
  getOneCat(@Param('id', PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return `getOneCat - ${param}`;
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
