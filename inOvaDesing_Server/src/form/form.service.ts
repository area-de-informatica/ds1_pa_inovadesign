import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form, FormDocument } from './schemas/form.schema';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name)
    private readonly model: Model<FormDocument>,
  ) {}

  // POST /form
  async create(createFormDto: CreateFormDto) {
    const doc = new this.model(createFormDto);
    return await doc.save();
  }

  // GET /form
  async findAll() {
    return await this.model.find().exec();
  }

  // GET /form/:id
  async findOne(id: string) {
    return await this.model.findById(id).exec();
  }

  // PATCH /form/:id
  async update(id: string, updateFormDto: UpdateFormDto) {
    return await this.model.findByIdAndUpdate(id, updateFormDto, {
      new: true, // devuelve el documento actualizado
    });
  }

  // DELETE /form/:id
  async remove(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
