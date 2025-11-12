import { PartialType } from '@nestjs/mapped-types';
import { CreateImplentationPhaseDto } from './create-implentation-phase.dto';

export class UpdateImplentationPhaseDto extends PartialType(CreateImplentationPhaseDto) {}
