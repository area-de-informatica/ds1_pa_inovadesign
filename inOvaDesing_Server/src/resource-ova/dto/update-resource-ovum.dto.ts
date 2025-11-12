import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceOvumDto } from './create-resource-ovum.dto';

export class UpdateResourceOvumDto extends PartialType(CreateResourceOvumDto) {}
