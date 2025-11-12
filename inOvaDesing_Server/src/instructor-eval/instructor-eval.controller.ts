import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstructorEvalService } from './instructor-eval.service';
import { CreateInstructorEvalDto } from './dto/create-instructor-eval.dto';
import { UpdateInstructorEvalDto } from './dto/update-instructor-eval.dto';

@Controller('instructor-eval')
export class InstructorEvalController {
  constructor(private readonly instructorEvalService: InstructorEvalService) {}

  @Post()
  create(@Body() createInstructorEvalDto: CreateInstructorEvalDto) {
    return this.instructorEvalService.create(createInstructorEvalDto);
  }

  @Get()
  findAll() {
    return this.instructorEvalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instructorEvalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstructorEvalDto: UpdateInstructorEvalDto) {
    return this.instructorEvalService.update(+id, updateInstructorEvalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instructorEvalService.remove(+id);
  }
}
