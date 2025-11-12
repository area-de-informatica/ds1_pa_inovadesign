import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImplementationPhaseDocument = HydratedDocument<ImplementationPhase>;

@Schema({ timestamps: true })
export class ImplementationPhase {
  @Prop()
  idImplementation: string;

  @Prop()
  idOVA: string;

  @Prop()
  applicationPlan: string;

  @Prop()
  support: string;
}

export const ImplementationPhaseSchema =
  SchemaFactory.createForClass(ImplementationPhase);
