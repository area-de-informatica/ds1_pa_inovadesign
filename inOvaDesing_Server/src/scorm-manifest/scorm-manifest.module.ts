import { Module } from '@nestjs/common';
import { ScormManifestService } from './scorm-manifest.service';
import { ScormManifestController } from './scorm-manifest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ScormManifest,
  ScormManifestSchema,
} from './schemas/scorm-manifest.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScormManifest.name, schema: ScormManifestSchema },
    ]),
  ],
  controllers: [ScormManifestController],
  providers: [ScormManifestService],
})
export class ScormManifestModule {}
