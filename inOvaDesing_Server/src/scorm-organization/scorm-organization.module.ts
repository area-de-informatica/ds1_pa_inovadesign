import { Module } from '@nestjs/common';
import { ScormOrganizationService } from './scorm-organization.service';
import { ScormOrganizationController } from './scorm-organization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ScormOrganization,
  ScormOrganizationSchema,
} from './schemas/scorm-organization.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScormOrganization.name, schema: ScormOrganizationSchema },
    ]),
  ],
  controllers: [ScormOrganizationController],
  providers: [ScormOrganizationService],
})
export class ScormOrganizationModule {}
