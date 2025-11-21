import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScormManifestService } from './scorm-manifest.service';
import { CreateScormManifestDto } from './dto/create-scorm-manifest.dto';
import { UpdateScormManifestDto } from './dto/update-scorm-manifest.dto';

@Controller('scorm-manifest')
export class ScormManifestController {
  constructor(private readonly scormManifestService: ScormManifestService) {}

  @Post()
  create(@Body() createScormManifestDto: CreateScormManifestDto) {
    return this.scormManifestService.create(createScormManifestDto);
  }

  @Get()
  findAll() {
    return this.scormManifestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scormManifestService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScormManifestDto: UpdateScormManifestDto) {
    return this.scormManifestService.update(id, updateScormManifestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scormManifestService.remove(id);
  }
}
