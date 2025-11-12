import { Injectable } from '@nestjs/common';
import { CreateScoDto } from './dto/create-sco.dto';
import { UpdateScoDto } from './dto/update-sco.dto';

@Injectable()
export class ScoService {
  create(createScoDto: CreateScoDto) {
    return 'This action adds a new sco';
  }

  findAll() {
    return `This action returns all sco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sco`;
  }

  update(id: number, updateScoDto: UpdateScoDto) {
    return `This action updates a #${id} sco`;
  }

  remove(id: number) {
    return `This action removes a #${id} sco`;
  }
}
