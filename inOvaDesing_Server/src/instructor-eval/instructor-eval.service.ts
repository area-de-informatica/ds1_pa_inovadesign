import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  InstructorEvaluation,
  InstructorEvaluationDocument,
} from './schemas/instructor-eval.schema';
import { CreateInstructorEvalDto } from './dto/create-instructor-eval.dto';
import { UpdateInstructorEvalDto } from './dto/update-instructor-eval.dto';

@Injectable()
export class InstructorEvaluationService {
  constructor(
    @InjectModel(InstructorEvaluation.name)
    private readonly model: Model<InstructorEvaluationDocument>,
  ) {}

  // POST /instructor-evaluation
  async create(createDto: CreateInstructorEvalDto) {
    const doc = new this.model(createDto);
    return await doc.save();
  }

  // GET /instructor-evaluation
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /instructor-evaluation/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /instructor-evaluation/:id
  async update(id: string, updateDto: UpdateInstructorEvalDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return await this.model.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
  }

  // DELETE /instructor-evaluation/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
