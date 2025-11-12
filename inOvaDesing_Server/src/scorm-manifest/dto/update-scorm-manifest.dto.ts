import { PartialType } from '@nestjs/mapped-types';
import { CreateScormManifestDto } from './create-scorm-manifest.dto';

export class UpdateScormManifestDto extends PartialType(CreateScormManifestDto) {}
