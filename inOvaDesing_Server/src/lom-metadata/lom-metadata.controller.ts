import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LomMetadataService } from './lom-metadata.service';
import { CreateLomMetadatumDto } from './dto/create-lom-metadatum.dto';
import { UpdateLomMetadatumDto } from './dto/update-lom-metadatum.dto';

@Controller('lom-metadata')
export class LomMetadataController {
  constructor(private readonly lomMetadataService: LomMetadataService) {}

  @Post()
  create(@Body() createLomMetadatumDto: CreateLomMetadatumDto) {
    return this.lomMetadataService.create(createLomMetadatumDto);
  }

  @Get()
  findAll() {
    return this.lomMetadataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lomMetadataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLomMetadatumDto: UpdateLomMetadatumDto) {
    return this.lomMetadataService.update(id, updateLomMetadatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lomMetadataService.remove(id);
  }
}
