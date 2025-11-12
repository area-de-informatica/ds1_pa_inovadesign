import { PartialType } from '@nestjs/mapped-types';
import { CreateScoDto } from './create-sco.dto';

export class UpdateScoDto extends PartialType(CreateScoDto) {}
