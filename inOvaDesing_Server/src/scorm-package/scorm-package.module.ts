import { Module } from '@nestjs/common';
import { ScormPackageService } from './scorm-package.service';
import { ScormPackageController } from './scorm-package.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ScormPackage,
  ScormPackageSchema,
} from './schemas/scorm-package.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScormPackage.name, schema: ScormPackageSchema },
    ]),
  ],
  controllers: [ScormPackageController],
  providers: [ScormPackageService],
})
export class ScormPackageModule {}
