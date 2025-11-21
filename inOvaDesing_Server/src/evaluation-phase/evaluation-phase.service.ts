import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  EvaluationPhase,
  EvaluationPhaseDocument,
} from './schemas/evaluation-phase.schema';
import { CreateEvaluationPhaseDto } from './dto/create-evaluation-phase.dto';
import { UpdateEvaluationPhaseDto } from './dto/update-evaluation-phase.dto';

@Injectable()
export class EvaluationPhaseService {
  constructor(
    @InjectModel(EvaluationPhase.name)
    private model: Model<EvaluationPhaseDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createEvaluationPhaseDto: CreateEvaluationPhaseDto) {
    return 'This action adds a new evaluationPhase';
  }

  findAll() {
    return `This action returns all evaluationPhase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluationPhase`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateEvaluationPhaseDto: UpdateEvaluationPhaseDto) {
    return `This action updates a #${id} evaluationPhase`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluationPhase`;
  }
}
