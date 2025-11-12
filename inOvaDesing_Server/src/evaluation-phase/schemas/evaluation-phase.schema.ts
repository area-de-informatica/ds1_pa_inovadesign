import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EvaluationPhaseDocument = HydratedDocument<EvaluationPhase>;

@Schema({ timestamps: true })
export class EvaluationPhase {
  @Prop()
  idEvaluationPhase: string;

  @Prop()
  idOVA: string;

  @Prop()
  instruments: string;

  @Prop()
  expectedResults: string;
}

export const EvaluationPhaseSchema =
  SchemaFactory.createForClass(EvaluationPhase);
