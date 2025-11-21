import { Module } from '@nestjs/common';
import { SCOService } from './sco.service';
import { ScoController } from './sco.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SCO, SCOSchema } from './schemas/sco.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SCO.name, schema: SCOSchema }])],
  controllers: [ScoController],
  providers: [SCOService],
})
export class ScoModule {}
