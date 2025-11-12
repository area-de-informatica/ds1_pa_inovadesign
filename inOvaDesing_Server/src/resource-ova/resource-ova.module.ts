import { Module } from '@nestjs/common';
import { ResourceOvaService } from './resource-ova.service';
import { ResourceOvaController } from './resource-ova.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LearningResource,
  LearningResourceSchema,
} from './schemas/resource-ova.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LearningResource.name, schema: LearningResourceSchema },
    ]),
  ],
  controllers: [ResourceOvaController],
  providers: [ResourceOvaService],
})
export class ResourceOvaModule {}
