import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScormResource,
  ScormResourceDocument,
} from './schemas/scorm-resource.schema';
import { CreateScormResourceDto } from './dto/create-scorm-resource.dto';
import { UpdateScormResourceDto } from './dto/update-scorm-resource.dto';

@Injectable()
export class ScormResourceService {
  constructor(
    @InjectModel(ScormResource.name)
    private readonly model: Model<ScormResourceDocument>,
  ) {}

  // POST /scorm-resource
  async create(createScormResourceDto: CreateScormResourceDto) {
    const doc = new this.model(createScormResourceDto);
    return await doc.save();
  }

  // GET /scorm-resource
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /scorm-resource/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /scorm-resource/:id
  async update(id: string, updateScormResourceDto: UpdateScormResourceDto) {
    return await this.model.findByIdAndUpdate(id, updateScormResourceDto, {
      new: true,
    });
  }

  // DELETE /scorm-resource/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
