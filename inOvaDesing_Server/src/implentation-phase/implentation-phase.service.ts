import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ImplementationPhase,
  ImplementationPhaseDocument,
} from './schemas/implementation-phase.schema';

@Injectable()
export class ImplementationPhaseService {
  constructor(
    @InjectModel(ImplementationPhase.name)
    private model: Model<ImplementationPhaseDocument>,
  ) {}

  create(createImplentationPhaseDto: CreateImplentationPhaseDto) {
    return 'This action adds a new implentationPhase';
  }

  findAll() {
    return `This action returns all implentationPhase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} implentationPhase`;
  }

  update(id: number, updateImplentationPhaseDto: UpdateImplentationPhaseDto) {
    return `This action updates a #${id} implentationPhase`;
  }

  remove(id: number) {
    return `This action removes a #${id} implentationPhase`;
  }
}
