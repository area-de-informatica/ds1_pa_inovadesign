import { PartialType } from '@nestjs/mapped-types';
import { CreateInstructorEvalDto } from './create-instructor-eval.dto';

export class UpdateInstructorEvalDto extends PartialType(CreateInstructorEvalDto) {}
