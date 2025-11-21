import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevelopmentPhaseService } from './development-phase.service';
import { CreateDevelopmentPhaseDto } from './dto/create-development-phase.dto';
import { UpdateDevelopmentPhaseDto } from './dto/update-development-phase.dto';

@Controller('development-phase')
export class DevelopmentPhaseController {
  constructor(
    private readonly developmentPhaseService: DevelopmentPhaseService,
  ) {}

  @Post()
  create(@Body() createDevelopmentPhaseDto: CreateDevelopmentPhaseDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.developmentPhaseService.create(createDevelopmentPhaseDto);
  }

  @Get()
  findAll() {
    return this.developmentPhaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developmentPhaseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDevelopmentPhaseDto: UpdateDevelopmentPhaseDto,
  ) {
    return this.developmentPhaseService.update(id, updateDevelopmentPhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developmentPhaseService.remove(id);
  }
}
