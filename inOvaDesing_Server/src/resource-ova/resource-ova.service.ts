import { Injectable } from '@nestjs/common';
import { CreateResourceOvumDto } from './dto/create-resource-ovum.dto';
import { UpdateResourceOvumDto } from './dto/update-resource-ovum.dto';

@Injectable()
export class ResourceOvaService {
  create(createResourceOvumDto: CreateResourceOvumDto) {
    return 'This action adds a new resourceOvum';
  }

  findAll() {
    return `This action returns all resourceOva`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourceOvum`;
  }

  update(id: number, updateResourceOvumDto: UpdateResourceOvumDto) {
    return `This action updates a #${id} resourceOvum`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourceOvum`;
  }
}
