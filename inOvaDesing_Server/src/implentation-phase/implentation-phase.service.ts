import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ImplementationPhase,
  ImplementationPhaseDocument,
} from './schemas/implementation-phase.schema';
import { UpdateImplentationPhaseDto } from './dto/update-implentation-phase.dto';
import { CreateImplentationPhaseDto } from './dto/create-implentation-phase.dto';

@Injectable()
export class ImplementationPhaseService {
  constructor(
    @InjectModel(ImplementationPhase.name)
    private readonly model: Model<ImplementationPhaseDocument>,
  ) {}

  // POST /implementation-phase
  async create(createImplentationPhaseDto: CreateImplentationPhaseDto) {
    const doc = new this.model(createImplentationPhaseDto);
    return await doc.save();
  }

  // GET /implementation-phase
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /implementation-phase/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /implementation-phase/:id
  async update(
    id: string,
    updateImplentationPhaseDto: UpdateImplentationPhaseDto,
  ) {
    return await this.model.findByIdAndUpdate(id, updateImplentationPhaseDto, {
      new: true, // devuelve el documento actualizado
    });
  }

  // DELETE /implementation-phase/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
