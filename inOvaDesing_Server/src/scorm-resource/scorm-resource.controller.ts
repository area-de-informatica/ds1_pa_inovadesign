import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScormResourceService } from './scorm-resource.service';
import { CreateScormResourceDto } from './dto/create-scorm-resource.dto';
import { UpdateScormResourceDto } from './dto/update-scorm-resource.dto';

@Controller('scorm-resource')
export class ScormResourceController {
  constructor(private readonly scormResourceService: ScormResourceService) {}

  @Post()
  create(@Body() createScormResourceDto: CreateScormResourceDto) {
    return this.scormResourceService.create(createScormResourceDto);
  }

  @Get()
  findAll() {
    return this.scormResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scormResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScormResourceDto: UpdateScormResourceDto) {
    return this.scormResourceService.update(+id, updateScormResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scormResourceService.remove(+id);
  }
}
