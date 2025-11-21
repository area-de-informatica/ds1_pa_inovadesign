import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  InstructorEvaluation,
  InstructorEvaluationDocument,
} from './schemas/instructor-eval.schema';

@Injectable()
export class InstructorEvaluationService {
  constructor(
    @InjectModel(InstructorEvaluation.name)
    private model: Model<InstructorEvaluationDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dto: any) {
    return 'This action adds a new instructor evaluation';
  }

  findAll() {
    return 'This action returns all instructor evaluations';
  }

  findOne(id: number) {
    return `This action returns a #${id} instructor evaluation`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _dto: any) {
    return `This action updates a #${id} instructor evaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} instructor evaluation`;
  }
}
