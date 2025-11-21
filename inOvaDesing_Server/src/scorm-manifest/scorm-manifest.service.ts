import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScormManifest,
  ScormManifestDocument,
} from './schemas/scorm-manifest.schema';
import { CreateScormManifestDto } from './dto/create-scorm-manifest.dto';
import { UpdateScormManifestDto } from './dto/update-scorm-manifest.dto';

@Injectable()
export class ScormManifestService {
  constructor(
    @InjectModel(ScormManifest.name)
    private readonly model: Model<ScormManifestDocument>,
  ) {}

  // POST /scorm-manifest
  async create(createScormManifestDto: CreateScormManifestDto) {
    const doc = new this.model(createScormManifestDto);
    return await doc.save();
  }

  // GET /scorm-manifest
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /scorm-manifest/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /scorm-manifest/:id
  async update(id: string, updateScormManifestDto: UpdateScormManifestDto) {
    return await this.model.findByIdAndUpdate(id, updateScormManifestDto, {
      new: true,
    });
  }

  // DELETE /scorm-manifest/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
