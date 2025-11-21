import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer, AnswerDocument } from './schemas/answer.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name)
    private readonly model: Model<AnswerDocument>,
  ) {}

  // POST /answers
  async create(createAnswerDto: CreateAnswerDto) {
    const doc = new this.model(createAnswerDto);
    return await doc.save();
  }

  // GET /answers
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /answers/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /answers/:id
  async update(id: string, updateAnswerDto: UpdateAnswerDto) {
    return await this.model.findByIdAndUpdate(id, updateAnswerDto, {
      new: true,
    });
  }

  // DELETE /answers/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
