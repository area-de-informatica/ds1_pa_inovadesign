import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserProgress,
  UserProgressDocument,
} from './schemas/user-progress.schema';
import { CreateUserProgressDto } from './dto/create-user-progress.dto';

@Injectable()
export class UserProgressService {
  constructor(
    @InjectModel(UserProgress.name)
    private model: Model<UserProgressDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dto: CreateUserProgressDto) {
    return 'This action adds a new user progress record';
  }

  findAll() {
    return 'This action returns all user progress records';
  }

  findOne(id: number) {
    return `This action returns a #${id} user progress record`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _dto) {
    return `This action updates a #${id} user progress record`;
  }

  remove(id: number) {
    return `This action removes a #${id} user progress record`;
  }
}
