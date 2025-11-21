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
    private readonly model: Model<ScormPackageDocument>,
  ) {}

  // POST /scorm-package
  async create(createScormPackageDto: CreateScormPackageDto) {
    const doc = new this.model(createScormPackageDto);
    return await doc.save();
  }

  // GET /scorm-package
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /scorm-package/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /scorm-package/:id
  async update(id: string, updateScormPackageDto: UpdateScormPackageDto) {
    return await this.model.findByIdAndUpdate(id, updateScormPackageDto, {
      new: true, // devuelve el documento actualizado
    });
  }

  // DELETE /scorm-package/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
