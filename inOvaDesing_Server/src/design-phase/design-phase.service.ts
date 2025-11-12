import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DesignPhase,
  DesignPhaseDocument,
} from './schemas/design-phase.schema';

@Injectable()
export class DesignPhaseService {
  constructor(
    @InjectModel(DesignPhase.name)
    private model: Model<DesignPhaseDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dto: any) {
    return 'This action adds a new design phase';
  }

  findAll() {
    return 'This action returns all design phases';
  }

  findOne(id: number) {
    return `This action returns a #${id} design phase`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _dto: any) {
    return `This action updates a #${id} design phase`;
  }

  remove(id: number) {
    return `This action removes a #${id} design phase`;
  }
}
