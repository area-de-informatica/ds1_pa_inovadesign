import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // CREATE
  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  // FIND ALL
  async findAll() {
    return await this.userModel.find().exec();
  }

  // FIND ONE
  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  // UPDATE
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  // DELETE
  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
