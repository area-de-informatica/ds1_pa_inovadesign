import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceOvaService } from './resource-ova.service';
import { CreateResourceOvumDto } from './dto/create-resource-ovum.dto';
import { UpdateResourceOvumDto } from './dto/update-resource-ovum.dto';

@Controller('resource-ova')
export class ResourceOvaController {
  constructor(private readonly resourceOvaService: ResourceOvaService) {}

  @Post()
  create(@Body() createResourceOvumDto: CreateResourceOvumDto) {
    return this.resourceOvaService.create(createResourceOvumDto);
  }

  @Get()
  findAll() {
    return this.resourceOvaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceOvaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceOvumDto: UpdateResourceOvumDto) {
    return this.resourceOvaService.update(+id, updateResourceOvumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceOvaService.remove(+id);
  }
}
