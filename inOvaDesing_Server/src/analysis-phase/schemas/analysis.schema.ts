import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnalysisPhaseDocument = HydratedDocument<AnalysisPhase>;

@Schema({ timestamps: true })
export class AnalysisPhase {
  @Prop()
  idAnalysis: string;

  @Prop()
  idOVA: string;

  @Prop()
  problem: string;

  @Prop()
  objectives: string;

  @Prop()
  context: string;
}

export const AnalysisPhaseSchema = SchemaFactory.createForClass(AnalysisPhase);
