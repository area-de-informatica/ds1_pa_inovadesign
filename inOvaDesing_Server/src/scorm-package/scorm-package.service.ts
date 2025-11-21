import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScormPackage,
  ScormPackageDocument,
} from './schemas/scorm-package.schema';
import { CreateScormPackageDto } from './dto/create-scorm-package.dto';
import { UpdateScormPackageDto } from './dto/update-scorm-package.dto';

@Injectable()
export class ScormPackageService {
  constructor(
    @InjectModel(ScormPackage.name)
    private model: Model<ScormPackageDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createScormPackageDto: CreateScormPackageDto) {
    return 'This action adds a new scormPackage';
  }

  findAll() {
    return `This action returns all scormPackage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormPackage`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateScormPackageDto: UpdateScormPackageDto) {
    return `This action updates a #${id} scormPackage`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormPackage`;
  }
}
