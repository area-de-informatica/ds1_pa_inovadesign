import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LearningResource,
  LearningResourceDocument,
} from './schemas/resource-ova.schema';
import { CreateResourceOvumDto } from './dto/create-resource-ovum.dto';
import { UpdateResourceOvumDto } from './dto/update-resource-ovum.dto';

@Injectable()
export class LearningResourceService {
  constructor(
    @InjectModel(LearningResource.name)
    private readonly model: Model<LearningResourceDocument>,
  ) {}

  // POST /learning-resources
  async create(createDto: CreateResourceOvumDto) {
    const doc = new this.model(createDto);
    return await doc.save();
  }

  // GET /learning-resources
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /learning-resources/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /learning-resources/:id
  async update(id: string, updateDto: UpdateResourceOvumDto) {
    return await this.model.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
  }

  // DELETE /learning-resources/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
