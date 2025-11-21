import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScormManifest,
  ScormManifestDocument,
} from './schemas/scorm-manifest.schema';
import { CreateScormManifestDto } from './dto/create-scorm-manifest.dto';
import { UpdateScormManifestDto } from './dto/update-scorm-manifest.dto';

@Injectable()
export class ScormManifestService {
  constructor(
    @InjectModel(ScormManifest.name)
    private model: Model<ScormManifestDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createScormManifestDto: CreateScormManifestDto) {
    return 'This action adds a new scormManifest';
  }

  findAll() {
    return `This action returns all scormManifest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormManifest`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateScormManifestDto: UpdateScormManifestDto) {
    return `This action updates a #${id} scormManifest`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormManifest`;
  }
}
