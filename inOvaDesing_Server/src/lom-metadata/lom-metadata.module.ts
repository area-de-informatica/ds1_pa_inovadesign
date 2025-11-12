import { Module } from '@nestjs/common';
import { LomMetadataService } from './lom-metadata.service';
import { LomMetadataController } from './lom-metadata.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LomMetadata, LomMetadataSchema } from './schemas/lom-metadata.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LomMetadata.name, schema: LomMetadataSchema },
    ]),
  ],
  controllers: [LomMetadataController],
  providers: [LomMetadataService],
})
export class LomMetadataModule {}
