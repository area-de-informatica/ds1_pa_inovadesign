import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LomMetadata,
  LomMetadataDocument,
} from './schemas/lom-metadata.schema';
import { CreateLomMetadatumDto } from './dto/create-lom-metadatum.dto';
import { UpdateLomMetadatumDto } from './dto/update-lom-metadatum.dto';

@Injectable()
export class LomMetadataService {
  constructor(
    @InjectModel(LomMetadata.name)
    private readonly model: Model<LomMetadataDocument>,
  ) {}

  // POST /lom-metadata
  async create(createLomMetadatumDto: CreateLomMetadatumDto) {
    const doc = new this.model(createLomMetadatumDto);
    return await doc.save();
  }

  // GET /lom-metadata
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /lom-metadata/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /lom-metadata/:id
  async update(id: string, updateLomMetadatumDto: UpdateLomMetadatumDto) {
    return await this.model.findByIdAndUpdate(id, updateLomMetadatumDto, {
      new: true,
    });
  }

  // DELETE /lom-metadata/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
