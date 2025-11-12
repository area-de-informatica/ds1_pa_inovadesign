import { Module } from '@nestjs/common';
import { EvaluationPhaseService } from './evaluation-phase.service';
import { EvaluationPhaseController } from './evaluation-phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EvaluationPhase,
  EvaluationPhaseSchema,
} from './schemas/evaluation-phase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EvaluationPhase.name, schema: EvaluationPhaseSchema },
    ]),
  ],
  controllers: [EvaluationPhaseController],
  providers: [EvaluationPhaseService],
})
export class EvaluationPhaseModule {}
