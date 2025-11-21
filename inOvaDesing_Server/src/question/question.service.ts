import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name)
    private readonly model: Model<QuestionDocument>,
  ) {}

  // POST /questions
  async create(createQuestionDto: CreateQuestionDto) {
    const doc = new this.model(createQuestionDto);
    return await doc.save();
  }

  // GET /questions
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /questions/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /questions/:id
  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return await this.model.findByIdAndUpdate(id, updateQuestionDto, {
      new: true, // devuelve el documento actualizado
    });
  }

  // DELETE /questions/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
