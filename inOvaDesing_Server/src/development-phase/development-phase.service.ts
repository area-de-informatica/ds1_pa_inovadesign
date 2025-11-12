import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DevelopmentPhase,
  DevelopmentPhaseDocument,
} from './schemas/development-phase.schema';
import { UpdateDevelopmentPhaseDto } from './dto/update-development-phase.dto';

@Injectable()
export class DevelopmentPhaseService {
  constructor(
    @InjectModel(DevelopmentPhase.name)
    private model: Model<DevelopmentPhaseDocument>,
  ) {}

  findAll() {
    return `This action returns all developmentPhase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} developmentPhase`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateDevelopmentPhaseDto: UpdateDevelopmentPhaseDto) {
    return `This action updates a #${id} developmentPhase`;
  }

  remove(id: number) {
    return `This action removes a #${id} developmentPhase`;
  }
}
