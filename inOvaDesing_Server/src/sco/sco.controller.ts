import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SCOService } from './sco.service';
import { CreateScoDto } from './dto/create-sco.dto';
import { UpdateScoDto } from './dto/update-sco.dto';

@Controller('sco')
export class ScoController {
  constructor(private readonly scoService: SCOService) {}

  @Post()
  create(@Body() createScoDto: CreateScoDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.scoService.create(createScoDto);
  }

  @Get()
  findAll() {
    return this.scoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScoDto: UpdateScoDto) {
    return this.scoService.update(id, updateScoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoService.remove(id);
  }
}
