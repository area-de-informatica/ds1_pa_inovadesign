import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AnalysisPhase,
  AnalysisPhaseDocument,
} from './schemas/analysis.schema';
import { CreateAnalysisPhaseDto } from './dto/create-analysis-phase.dto';
import { UpdateAnalysisPhaseDto } from './dto/update-analysis-phase.dto';

@Injectable()
export class AnalysisPhaseService {
  constructor(
    @InjectModel(AnalysisPhase.name)
    private model: Model<AnalysisPhaseDocument>,
  ) {}

  // CREATE
  async create(createDto: CreateAnalysisPhaseDto) {
    const newRecord = new this.model(createDto);
    return await newRecord.save();
  }

  // FIND ALL
  async findAll() {
    return await this.model.find().exec();
  }

  // FIND ONE (Mongo _id)
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // UPDATE
  async update(id: string, updateDto: UpdateAnalysisPhaseDto) {
    return await this.model
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  // DELETE
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
