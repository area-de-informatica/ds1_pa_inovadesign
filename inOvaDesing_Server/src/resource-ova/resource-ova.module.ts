import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LearningResource,
  LearningResourceSchema,
} from './schemas/resource-ova.schema';
import { LearningResourceService } from './resource-ova.service';
import { LearningResourceController } from './resource-ova.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LearningResource.name, schema: LearningResourceSchema },
    ]),
  ],
  controllers: [LearningResourceController], // 👈 IMPORTANTE
  providers: [LearningResourceService],
  exports: [LearningResourceService],
})
export class ResourceOvaModule {}
