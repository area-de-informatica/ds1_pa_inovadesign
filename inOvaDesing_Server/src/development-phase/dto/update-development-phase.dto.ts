import { PartialType } from '@nestjs/mapped-types';
import { CreateDevelopmentPhaseDto } from './create-development-phase.dto';

export class UpdateDevelopmentPhaseDto extends PartialType(CreateDevelopmentPhaseDto) {}
