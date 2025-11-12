import { Injectable } from '@nestjs/common';
import { CreateLomMetadatumDto } from './dto/create-lom-metadatum.dto';
import { UpdateLomMetadatumDto } from './dto/update-lom-metadatum.dto';

@Injectable()
export class LomMetadataService {
  create(createLomMetadatumDto: CreateLomMetadatumDto) {
    return 'This action adds a new lomMetadatum';
  }

  findAll() {
    return `This action returns all lomMetadata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lomMetadatum`;
  }

  update(id: number, updateLomMetadatumDto: UpdateLomMetadatumDto) {
    return `This action updates a #${id} lomMetadatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} lomMetadatum`;
  }
}
