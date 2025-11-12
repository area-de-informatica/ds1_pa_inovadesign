import { Injectable } from '@nestjs/common';
import { CreateScormOrganizationDto } from './dto/create-scorm-organization.dto';
import { UpdateScormOrganizationDto } from './dto/update-scorm-organization.dto';

@Injectable()
export class ScormOrganizationService {
  create(createScormOrganizationDto: CreateScormOrganizationDto) {
    return 'This action adds a new scormOrganization';
  }

  findAll() {
    return `This action returns all scormOrganization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormOrganization`;
  }

  update(id: number, updateScormOrganizationDto: UpdateScormOrganizationDto) {
    return `This action updates a #${id} scormOrganization`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormOrganization`;
  }
}
