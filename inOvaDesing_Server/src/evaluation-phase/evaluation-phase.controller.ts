import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationPhaseService } from './evaluation-phase.service';
import { CreateEvaluationPhaseDto } from './dto/create-evaluation-phase.dto';
import { UpdateEvaluationPhaseDto } from './dto/update-evaluation-phase.dto';

@Controller('evaluation-phase')
export class EvaluationPhaseController {
  constructor(private readonly evaluationPhaseService: EvaluationPhaseService) {}

  @Post()
  create(@Body() createEvaluationPhaseDto: CreateEvaluationPhaseDto) {
    return this.evaluationPhaseService.create(createEvaluationPhaseDto);
  }

  @Get()
  findAll() {
    return this.evaluationPhaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationPhaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationPhaseDto: UpdateEvaluationPhaseDto) {
    return this.evaluationPhaseService.update(+id, updateEvaluationPhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationPhaseService.remove(+id);
  }
}
