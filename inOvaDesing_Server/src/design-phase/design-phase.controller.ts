import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesignPhaseService } from './design-phase.service';
import { CreateDesignPhaseDto } from './dto/create-design-phase.dto';
import { UpdateDesignPhaseDto } from './dto/update-design-phase.dto';

@Controller('design-phase')
export class DesignPhaseController {
  constructor(private readonly designPhaseService: DesignPhaseService) {}

  @Post()
  create(@Body() createDesignPhaseDto: CreateDesignPhaseDto) {
    return this.designPhaseService.create(createDesignPhaseDto);
  }

  @Get()
  findAll() {
    return this.designPhaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designPhaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDesignPhaseDto: UpdateDesignPhaseDto) {
    return this.designPhaseService.update(+id, updateDesignPhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designPhaseService.remove(+id);
  }
}
