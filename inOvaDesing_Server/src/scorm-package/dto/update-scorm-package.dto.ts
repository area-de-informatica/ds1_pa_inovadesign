import { PartialType } from '@nestjs/mapped-types';
import { CreateScormPackageDto } from './create-scorm-package.dto';

export class UpdateScormPackageDto extends PartialType(CreateScormPackageDto) {}
