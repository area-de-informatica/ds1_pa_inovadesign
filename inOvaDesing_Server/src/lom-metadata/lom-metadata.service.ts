import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LomMetadata,
  LomMetadataDocument,
} from './schemas/lom-metadata.schema';
import { CreateLomMetadatumDto } from './dto/create-lom-metadatum.dto';
import { UpdateLomMetadatumDto } from './dto/update-lom-metadatum.dto';

@Injectable()
export class LomMetadataService {
  constructor(
    @InjectModel(LomMetadata.name)
    private model: Model<LomMetadataDocument>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createLomMetadatumDto: CreateLomMetadatumDto) {
    return 'This action adds a new lomMetadatum';
  }

  findAll() {
    return `This action returns all lomMetadata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lomMetadatum`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateLomMetadatumDto: UpdateLomMetadatumDto) {
    return `This action updates a #${id} lomMetadatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} lomMetadatum`;
  }
}
