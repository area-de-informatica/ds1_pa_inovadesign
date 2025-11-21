import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form, FormDocument } from './schemas/form.schema';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name)
    private model: Model<FormDocument>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createFormDto: CreateFormDto) {
    return 'This action adds a new form';
  }

  findAll() {
    return `This action returns all form`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
