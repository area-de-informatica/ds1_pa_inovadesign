import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer, AnswerDocument } from './schemas/answer.schema';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name)
    private model: Model<AnswerDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dto: any) {
    return 'This action adds a new answer';
  }

  findAll() {
    return 'This action returns all answers';
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _dto: any) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
