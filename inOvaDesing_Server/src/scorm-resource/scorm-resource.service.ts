import { Injectable } from '@nestjs/common';
import { CreateScormResourceDto } from './dto/create-scorm-resource.dto';
import { UpdateScormResourceDto } from './dto/update-scorm-resource.dto';

@Injectable()
export class ScormResourceService {
  create(createScormResourceDto: CreateScormResourceDto) {
    return 'This action adds a new scormResource';
  }

  findAll() {
    return `This action returns all scormResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormResource`;
  }

  update(id: number, updateScormResourceDto: UpdateScormResourceDto) {
    return `This action updates a #${id} scormResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormResource`;
  }
}
