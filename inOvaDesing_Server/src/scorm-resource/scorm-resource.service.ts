import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScormResource,
  ScormResourceDocument,
} from './schemas/scorm-resource.schema';
import { CreateScormResourceDto } from './dto/create-scorm-resource.dto';
import { UpdateScormResourceDto } from './dto/update-scorm-resource.dto';

@Injectable()
export class ScormResourceService {
  constructor(
    @InjectModel(ScormResource.name)
    private model: Model<ScormResourceDocument>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createScormResourceDto: CreateScormResourceDto) {
    return 'This action adds a new scormResource';
  }

  findAll() {
    return `This action returns all scormResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormResource`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateScormResourceDto: UpdateScormResourceDto) {
    return `This action updates a #${id} scormResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormResource`;
  }
}
