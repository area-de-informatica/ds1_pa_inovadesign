import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LearningResource,
  LearningResourceDocument,
} from './schemas/resource-ova.schema';

@Injectable()
export class LearningResourceService {
  constructor(
    @InjectModel(LearningResource.name)
    private model: Model<LearningResourceDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dto: any) {
    return 'This action adds a new learning resource';
  }

  findAll() {
    return 'This action returns all learning resources';
  }

  findOne(id: number) {
    return `This action returns a #${id} learning resource`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _dto: any) {
    return `This action updates a #${id} learning resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} learning resource`;
  }
}
