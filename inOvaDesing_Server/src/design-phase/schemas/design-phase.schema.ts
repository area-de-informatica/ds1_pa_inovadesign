import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DesignPhaseDocument = HydratedDocument<DesignPhase>;

@Schema({ timestamps: true })
export class DesignPhase {
  @Prop()
  idDesign: string;

  @Prop()
  idOVA: string;

  @Prop()
  strategies: string;

  @Prop()
  specificObjectives: string;

  @Prop()
  structure: string;
}

export const DesignPhaseSchema = SchemaFactory.createForClass(DesignPhase);
