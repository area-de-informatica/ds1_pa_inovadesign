import { Injectable } from '@nestjs/common';
import { CreateScormPackageDto } from './dto/create-scorm-package.dto';
import { UpdateScormPackageDto } from './dto/update-scorm-package.dto';

@Injectable()
export class ScormPackageService {
  create(createScormPackageDto: CreateScormPackageDto) {
    return 'This action adds a new scormPackage';
  }

  findAll() {
    return `This action returns all scormPackage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormPackage`;
  }

  update(id: number, updateScormPackageDto: UpdateScormPackageDto) {
    return `This action updates a #${id} scormPackage`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormPackage`;
  }
}
