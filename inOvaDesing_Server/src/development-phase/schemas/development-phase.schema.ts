import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DevelopmentPhaseDocument = HydratedDocument<DevelopmentPhase>;

@Schema({ timestamps: true })
export class DevelopmentPhase {
  @Prop()
  idDevelopment: string;

  @Prop()
  idOVA: string;

  @Prop()
  createdResources: string;

  @Prop()
  activities: string;
}

export const DevelopmentPhaseSchema =
  SchemaFactory.createForClass(DevelopmentPhase);
