import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
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
