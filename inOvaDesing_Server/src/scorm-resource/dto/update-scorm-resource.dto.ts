import { PartialType } from '@nestjs/mapped-types';
import { CreateScormResourceDto } from './create-scorm-resource.dto';

export class UpdateScormResourceDto extends PartialType(CreateScormResourceDto) {}
