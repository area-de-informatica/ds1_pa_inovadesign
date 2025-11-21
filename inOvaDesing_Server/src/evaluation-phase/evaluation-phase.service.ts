import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  EvaluationPhase,
  EvaluationPhaseDocument,
} from './schemas/evaluation-phase.schema';
import { CreateEvaluationPhaseDto } from './dto/create-evaluation-phase.dto';
import { UpdateEvaluationPhaseDto } from './dto/update-evaluation-phase.dto';

@Injectable()
export class EvaluationPhaseService {
  constructor(
    @InjectModel(EvaluationPhase.name)
    private readonly model: Model<EvaluationPhaseDocument>,
  ) {}

  // POST /evaluation-phase
  async create(createEvaluationPhaseDto: CreateEvaluationPhaseDto) {
    const doc = new this.model(createEvaluationPhaseDto);
    return await doc.save();
  }

  // GET /evaluation-phase
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /evaluation-phase/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /evaluation-phase/:id
  async update(id: string, updateEvaluationPhaseDto: UpdateEvaluationPhaseDto) {
    return await this.model.findByIdAndUpdate(id, updateEvaluationPhaseDto, {
      new: true, // devuelve el documento actualizado
    });
  }

  // DELETE /evaluation-phase/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
