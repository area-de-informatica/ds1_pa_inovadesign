import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScormOrganization,
  ScormOrganizationDocument,
} from './schemas/scorm-organization.schema';
import { CreateScormOrganizationDto } from './dto/create-scorm-organization.dto';
import { UpdateScormOrganizationDto } from './dto/update-scorm-organization.dto';

@Injectable()
export class ScormOrganizationService {
  constructor(
    @InjectModel(ScormOrganization.name)
    private model: Model<ScormOrganizationDocument>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createScormOrganizationDto: CreateScormOrganizationDto) {
    return 'This action adds a new scormOrganization';
  }

  findAll() {
    return `This action returns all scormOrganization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scormOrganization`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateScormOrganizationDto: UpdateScormOrganizationDto) {
    return `This action updates a #${id} scormOrganization`;
  }

  remove(id: number) {
    return `This action removes a #${id} scormOrganization`;
  }
}
