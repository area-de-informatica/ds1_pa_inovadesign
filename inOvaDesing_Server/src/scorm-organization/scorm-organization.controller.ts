import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScormOrganizationService } from './scorm-organization.service';
import { CreateScormOrganizationDto } from './dto/create-scorm-organization.dto';
import { UpdateScormOrganizationDto } from './dto/update-scorm-organization.dto';

@Controller('scorm-organization')
export class ScormOrganizationController {
  constructor(private readonly scormOrganizationService: ScormOrganizationService) {}

  @Post()
  create(@Body() createScormOrganizationDto: CreateScormOrganizationDto) {
    return this.scormOrganizationService.create(createScormOrganizationDto);
  }

  @Get()
  findAll() {
    return this.scormOrganizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scormOrganizationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScormOrganizationDto: UpdateScormOrganizationDto) {
    return this.scormOrganizationService.update(id, updateScormOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scormOrganizationService.remove(id);
  }
}
