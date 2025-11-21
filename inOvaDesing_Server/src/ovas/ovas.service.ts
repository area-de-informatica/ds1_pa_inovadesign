import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ova, OvaDocument } from './schemas/ova.schema';
import { CreateOvaDto } from './dto/create-ova.dto';
import { UpdateOvaDto } from './dto/update-ova.dto';

@Injectable()
export class OvasService {
  constructor(
    @InjectModel(Ova.name)
    private model: Model<OvaDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createOvaDto: CreateOvaDto) {
    return 'This action adds a new ova';
  }

  findAll() {
    return `This action returns all ovas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ova`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateOvaDto: UpdateOvaDto) {
    return `This action updates a #${id} ova`;
  }

  remove(id: number) {
    return `This action removes a #${id} ova`;
  }
}
