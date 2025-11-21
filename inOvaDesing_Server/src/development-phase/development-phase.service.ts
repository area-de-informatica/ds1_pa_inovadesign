import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DevelopmentPhase,
  DevelopmentPhaseDocument,
} from './schemas/development-phase.schema';
import { UpdateDevelopmentPhaseDto } from './dto/update-development-phase.dto';
import { CreateDevelopmentPhaseDto } from './dto/create-development-phase.dto';

@Injectable()
export class DevelopmentPhaseService {
  constructor(
    @InjectModel(DevelopmentPhase.name)
    private readonly model: Model<DevelopmentPhaseDocument>,
  ) {}

  // POST /development-phase
  async create(createDevelopmentPhaseDto: CreateDevelopmentPhaseDto) {
    const doc = new this.model(createDevelopmentPhaseDto);
    return await doc.save();
  }

  // GET /development-phase
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /development-phase/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /development-phase/:id
  async update(
    id: string,
    updateDevelopmentPhaseDto: UpdateDevelopmentPhaseDto,
  ) {
    return await this.model.findByIdAndUpdate(id, updateDevelopmentPhaseDto, {
      new: true, // devuelve el documento actualizado
    });
  }

  // DELETE /development-phase/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
