import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LearningResourceService } from './resource-ova.service';
import { CreateResourceOvumDto } from './dto/create-resource-ovum.dto';
import { UpdateResourceOvumDto } from './dto/update-resource-ovum.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('learning-resources') // así se verá en Swagger
@Controller('learning-resources') // ruta base: /learning-resources
export class LearningResourceController {
  constructor(private readonly service: LearningResourceService) {}

  @Post()
  create(@Body() createDto: CreateResourceOvumDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateResourceOvumDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
