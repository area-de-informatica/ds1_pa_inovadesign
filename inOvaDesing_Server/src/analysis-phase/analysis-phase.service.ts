import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AnalysisPhase,
  AnalysisPhaseDocument,
} from './schemas/analysis.schema';

@Injectable()
export class AnalysisPhaseService {
  constructor(
    @InjectModel(AnalysisPhase.name)
    private model: Model<AnalysisPhaseDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dto: any) {
    return 'This action adds a new analysis phase';
  }

  findAll() {
    return 'This action returns all analysis phases';
  }

  findOne(id: number) {
    return `This action returns a #${id} analysis phase`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _dto: any) {
    return `This action updates a #${id} analysis phase`;
  }

  remove(id: number) {
    return `This action removes a #${id} analysis phase`;
  }
}
