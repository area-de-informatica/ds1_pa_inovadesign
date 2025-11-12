import { Module } from '@nestjs/common';
import { DevelopmentPhaseService } from './development-phase.service';
import { DevelopmentPhaseController } from './development-phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DevelopmentPhase,
  DevelopmentPhaseSchema,
} from './schemas/development-phase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DevelopmentPhase.name, schema: DevelopmentPhaseSchema },
    ]),
  ],
  controllers: [DevelopmentPhaseController],
  providers: [DevelopmentPhaseService],
})
export class DevelopmentPhaseModule {}
