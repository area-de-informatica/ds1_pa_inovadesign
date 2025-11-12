import { PartialType } from '@nestjs/mapped-types';
import { CreateLomMetadatumDto } from './create-lom-metadatum.dto';

export class UpdateLomMetadatumDto extends PartialType(CreateLomMetadatumDto) {}
