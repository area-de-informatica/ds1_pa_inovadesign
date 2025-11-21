import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ImplementationPhase,
  ImplementationPhaseDocument,
} from './schemas/implementation-phase.schema';
import { UpdateImplentationPhaseDto } from './dto/update-implentation-phase.dto';
import { CreateImplentationPhaseDto } from './dto/create-implentation-phase.dto';

@Injectable()
export class ImplementationPhaseService {
  constructor(
    @InjectModel(ImplementationPhase.name)
    private model: Model<ImplementationPhaseDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createImplentationPhaseDto: CreateImplentationPhaseDto) {
    return 'This action adds a new implentationPhase';
  }

  findAll() {
    return `This action returns all implentationPhase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} implentationPhase`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateImplentationPhaseDto: UpdateImplentationPhaseDto) {
    return `This action updates a #${id} implentationPhase`;
  }

  remove(id: number) {
    return `This action removes a #${id} implentationPhase`;
  }
}
