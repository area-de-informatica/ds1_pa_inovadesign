import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DesignPhase,
  DesignPhaseDocument,
} from './schemas/design-phase.schema';
import { CreateDesignPhaseDto } from './dto/create-design-phase.dto';
import { UpdateDesignPhaseDto } from './dto/update-design-phase.dto';

@Injectable()
export class DesignPhaseService {
  constructor(
    @InjectModel(DesignPhase.name)
    private model: Model<DesignPhaseDocument>,
  ) {}

  // CREATE
  async create(createDto: CreateDesignPhaseDto) {
    const newRecord = new this.model(createDto);
    return await newRecord.save();
  }

  // FIND ALL
  async findAll() {
    return await this.model.find().exec();
  }

  // FIND ONE
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // UPDATE
  async update(id: string, updateDto: UpdateDesignPhaseDto) {
    return await this.model
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  // DELETE
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
