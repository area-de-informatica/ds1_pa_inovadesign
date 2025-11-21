import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScormPackageService } from './scorm-package.service';
import { CreateScormPackageDto } from './dto/create-scorm-package.dto';
import { UpdateScormPackageDto } from './dto/update-scorm-package.dto';

@Controller('scorm-package')
export class ScormPackageController {
  constructor(private readonly scormPackageService: ScormPackageService) {}

  @Post()
  create(@Body() createScormPackageDto: CreateScormPackageDto) {
    return this.scormPackageService.create(createScormPackageDto);
  }

  @Get()
  findAll() {
    return this.scormPackageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scormPackageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScormPackageDto: UpdateScormPackageDto) {
    return this.scormPackageService.update(id, updateScormPackageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scormPackageService.remove(id);
  }
}
