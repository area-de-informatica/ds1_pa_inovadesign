import { Module } from '@nestjs/common';
import { AnalysisPhaseService } from './analysis-phase.service';
import { AnalysisPhaseController } from './analysis-phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalysisPhase, AnalysisPhaseSchema } from './schemas/analysis.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnalysisPhase.name, schema: AnalysisPhaseSchema },
    ]),
  ],
  controllers: [AnalysisPhaseController],
  providers: [AnalysisPhaseService],
})
export class AnalysisPhaseModule {}
