import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ova, OvaDocument } from './schemas/ova.schema';
import { CreateOvaDto } from './dto/create-ova.dto';
import { UpdateOvaDto } from './dto/update-ova.dto';

@Injectable()
export class OvasService {
  constructor(
    @InjectModel(Ova.name)
    private readonly model: Model<OvaDocument>,
  ) {}

  // CREATE
  async create(createOvaDto: CreateOvaDto) {
    const created = new this.model(createOvaDto);
    return await created.save();
  }

  // GET ALL
  async findAll() {
    return await this.model.find().exec();
  }

  // GET ONE
  async findOne(id: string) {
    const ova = await this.model.findById(id).exec();
    if (!ova) throw new NotFoundException(`OVA with id ${id} not found`);
    return ova;
  }

  // UPDATE
  async update(id: string, updateOvaDto: UpdateOvaDto) {
    const updated = await this.model
      .findByIdAndUpdate(id, updateOvaDto, { new: true })
      .exec();

    if (!updated) throw new NotFoundException(`OVA with id ${id} not found`);
    return updated;
  }

  // DELETE
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException(`OVA with id ${id} not found`);
    return { message: `OVA ${id} deleted successfully` };
  }
}
