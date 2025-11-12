import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  EvaluationPhase,
  EvaluationPhaseDocument,
} from './schemas/evaluation-phase.schema';

@Injectable()
export class EvaluationPhaseService {
  constructor(
    @InjectModel(EvaluationPhase.name)
    private model: Model<EvaluationPhaseDocument>,
  ) {}

  create(createEvaluationPhaseDto: CreateEvaluationPhaseDto) {
    return 'This action adds a new evaluationPhase';
  }

  findAll() {
    return `This action returns all evaluationPhase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluationPhase`;
  }

  update(id: number, updateEvaluationPhaseDto: UpdateEvaluationPhaseDto) {
    return `This action updates a #${id} evaluationPhase`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluationPhase`;
  }
}
