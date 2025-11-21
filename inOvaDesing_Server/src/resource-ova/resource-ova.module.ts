import { Module } from '@nestjs/common';
import {
  LearningResource,
  LearningResourceSchema,
} from './schemas/resource-ova.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LearningResourceService } from './resource-ova.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LearningResource.name, schema: LearningResourceSchema },
    ]),
  ],
  providers: [LearningResourceService],
  exports: [LearningResourceService],
})
export class ResourceOvaModule {}
