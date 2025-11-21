import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UserProgress,
  UserProgressDocument,
} from './schemas/user-progress.schema';
import { CreateUserProgressDto } from './dto/create-user-progress.dto';
import { UpdateUserProgressDto } from './dto/update-user-progress.dto';

@Injectable()
export class UserProgressService {
  constructor(
    @InjectModel(UserProgress.name)
    private readonly model: Model<UserProgressDocument>,
  ) {}

  // POST /user-progress
  async create(createDto: CreateUserProgressDto) {
    const doc = new this.model(createDto);
    return await doc.save();
  }

  // GET /user-progress
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /user-progress/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /user-progress/:id
  async update(id: string, updateDto: UpdateUserProgressDto) {
    return await this.model.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
  }

  // DELETE /user-progress/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
