import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalysisPhaseService } from './analysis-phase.service';
import { CreateAnalysisPhaseDto } from './dto/create-analysis-phase.dto';
import { UpdateAnalysisPhaseDto } from './dto/update-analysis-phase.dto';

@Controller('analysis-phase')
export class AnalysisPhaseController {
  constructor(private readonly analysisPhaseService: AnalysisPhaseService) {}

  @Post()
  create(@Body() createAnalysisPhaseDto: CreateAnalysisPhaseDto) {
    return this.analysisPhaseService.create(createAnalysisPhaseDto);
  }

  @Get()
  findAll() {
    return this.analysisPhaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analysisPhaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalysisPhaseDto: UpdateAnalysisPhaseDto) {
    return this.analysisPhaseService.update(+id, updateAnalysisPhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analysisPhaseService.remove(+id);
  }
}
