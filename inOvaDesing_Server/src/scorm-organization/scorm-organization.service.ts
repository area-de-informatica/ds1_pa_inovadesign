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
    private readonly model: Model<ScormOrganizationDocument>,
  ) {}

  // POST /scorm-organization
  async create(createScormOrganizationDto: CreateScormOrganizationDto) {
    const doc = new this.model(createScormOrganizationDto);
    return await doc.save();
  }

  // GET /scorm-organization
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /scorm-organization/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /scorm-organization/:id
  async update(
    id: string,
    updateScormOrganizationDto: UpdateScormOrganizationDto,
  ) {
    return await this.model.findByIdAndUpdate(id, updateScormOrganizationDto, {
      new: true,
    });
  }

  // DELETE /scorm-organization/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
