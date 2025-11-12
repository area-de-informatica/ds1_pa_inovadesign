import { PartialType } from '@nestjs/mapped-types';
import { CreateDesignPhaseDto } from './create-design-phase.dto';

export class UpdateDesignPhaseDto extends PartialType(CreateDesignPhaseDto) {}
