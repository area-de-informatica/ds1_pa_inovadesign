import { Injectable } from '@nestjs/common';
import { CreateInstructorEvalDto } from './dto/create-instructor-eval.dto';
import { UpdateInstructorEvalDto } from './dto/update-instructor-eval.dto';

@Injectable()
export class InstructorEvalService {
  create(createInstructorEvalDto: CreateInstructorEvalDto) {
    return 'This action adds a new instructorEval';
  }

  findAll() {
    return `This action returns all instructorEval`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instructorEval`;
  }

  update(id: number, updateInstructorEvalDto: UpdateInstructorEvalDto) {
    return `This action updates a #${id} instructorEval`;
  }

  remove(id: number) {
    return `This action removes a #${id} instructorEval`;
  }
}
