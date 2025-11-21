import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SCO, SCODocument } from './schemas/sco.schema';
import { CreateScoDto } from './dto/create-sco.dto';
import { UpdateScoDto } from './dto/update-sco.dto';

@Injectable()
export class SCOService {
  constructor(
    @InjectModel(SCO.name)
    private readonly model: Model<SCODocument>,
  ) {}

  // POST /sco
  async create(createScoDto: CreateScoDto) {
    const doc = new this.model(createScoDto);
    return await doc.save();
  }

  // GET /sco
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /sco/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /sco/:id
  async update(id: string, updateScoDto: UpdateScoDto) {
    return await this.model.findByIdAndUpdate(id, updateScoDto, {
      new: true,
    });
  }

  // DELETE /sco/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
