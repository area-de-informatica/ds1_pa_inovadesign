import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateImplentationPhaseDto } from './dto/create-implentation-phase.dto';
import { UpdateImplentationPhaseDto } from './dto/update-implentation-phase.dto';
import { ImplementationPhaseService } from './implentation-phase.service';

@Controller('implentation-phase')
export class ImplentationPhaseController {
  constructor(
    private readonly implentationPhaseService: ImplementationPhaseService,
  ) {}

  @Post()
  create(@Body() createImplentationPhaseDto: CreateImplentationPhaseDto) {
    return this.implentationPhaseService.create(createImplentationPhaseDto);
  }

  @Get()
  findAll() {
    return this.implentationPhaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.implentationPhaseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImplentationPhaseDto: UpdateImplentationPhaseDto,
  ) {
    return this.implentationPhaseService.update(id, updateImplentationPhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.implentationPhaseService.remove(id);
  }
}
