/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Injectable,
} from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import {  } from './resource-ova.service';
import { CreateResourceOvumDto } from './dto/create-resource-ovum.dto';
import { UpdateResourceOvumDto } from './dto/update-resource-ovum.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  LearningResource,
  LearningResourceDocument,
} from './schemas/resource-ova.schema';
import { Model } from 'mongoose';

@Injectable()
export class LearningResourceService {
  resourceOvaService: any;
  constructor(
    @InjectModel(LearningResource.name)
    private model: Model<LearningResourceDocument>,
  ) {}

  @Post()
  create(@Body() createResourceOvumDto: CreateResourceOvumDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.resourceOvaService.create(createResourceOvumDto);
  }

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.resourceOvaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.resourceOvaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResourceOvumDto: UpdateResourceOvumDto,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.resourceOvaService.update(+id, updateResourceOvumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.resourceOvaService.remove(+id);
  }
}
