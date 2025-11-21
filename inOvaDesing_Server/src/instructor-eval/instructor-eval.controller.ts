import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstructorEvaluationService } from './instructor-eval.service';
import { CreateInstructorEvalDto } from './dto/create-instructor-eval.dto';
import { UpdateInstructorEvalDto } from './dto/update-instructor-eval.dto';

@Controller('instructor-eval')
export class InstructorEvalController {
  constructor(
    private readonly instructorEvaluationService: InstructorEvaluationService,
  ) {}

  @Post()
  create(@Body() createInstructorEvalDto: CreateInstructorEvalDto) {
    return this.instructorEvaluationService.create(createInstructorEvalDto);
  }

  @Get()
  findAll() {
    return this.instructorEvaluationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instructorEvaluationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstructorEvalDto: UpdateInstructorEvalDto,
  ) {
    return this.instructorEvaluationService.update(
      +id,
      updateInstructorEvalDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instructorEvaluationService.remove(+id);
  }
}
