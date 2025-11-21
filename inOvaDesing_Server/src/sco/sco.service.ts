import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SCO, SCODocument } from './schemas/sco.schema';
import { CreateScoDto } from './dto/create-sco.dto';
import { UpdateScoDto } from './dto/update-sco.dto';

@Injectable()
export class SCOService {
  constructor(
    @InjectModel(SCO.name)
    private model: Model<SCODocument>,
  ) {}
  create(createScoDto: CreateScoDto) {
    return 'This action adds a new sco';
  }

  findAll() {
    return `This action returns all sco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sco`;
  }

  update(id: number, updateScoDto: UpdateScoDto) {
    return `This action updates a #${id} sco`;
  }

  remove(id: number) {
    return `This action removes a #${id} sco`;
  }
}
