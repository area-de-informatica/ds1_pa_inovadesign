import { Injectable } from '@nestjs/common';
import { CreateScormManifestDto } from './dto/create-scorm-manifest.dto';
import { UpdateScormManifestDto } from './dto/update-scorm-manifest.dto';

@Injectable()
export class ScormManifestService {
  create(createScormManifestDto: CreateScormManifestDto) {
    return 'This action adds a new scormManifest';
  }

  findAll() {
    return `This action returns all scormManifest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormManifest`;
  }

  update(id: number, updateScormManifestDto: UpdateScormManifestDto) {
    return `This action updates a #${id} scormManifest`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormManifest`;
  }
}
