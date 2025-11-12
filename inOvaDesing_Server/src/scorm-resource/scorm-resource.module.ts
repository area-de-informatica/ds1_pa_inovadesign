import { Module } from '@nestjs/common';
import { ScormResourceService } from './scorm-resource.service';
import { ScormResourceController } from './scorm-resource.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ScormResource,
  ScormResourceSchema,
} from './schemas/scorm-resource.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScormResource.name, schema: ScormResourceSchema },
    ]),
  ],
  controllers: [ScormResourceController],
  providers: [ScormResourceService],
})
export class ScormResourceModule {}
