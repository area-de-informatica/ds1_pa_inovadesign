import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluationPhaseDto } from './create-evaluation-phase.dto';

export class UpdateEvaluationPhaseDto extends PartialType(CreateEvaluationPhaseDto) {}
