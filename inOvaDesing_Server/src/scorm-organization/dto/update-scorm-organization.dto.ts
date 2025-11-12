import { PartialType } from '@nestjs/mapped-types';
import { CreateScormOrganizationDto } from './create-scorm-organization.dto';

export class UpdateScormOrganizationDto extends PartialType(CreateScormOrganizationDto) {}
