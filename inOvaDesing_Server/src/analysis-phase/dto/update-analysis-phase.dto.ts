import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalysisPhaseDto } from './create-analysis-phase.dto';

export class UpdateAnalysisPhaseDto extends PartialType(CreateAnalysisPhaseDto) {}
