import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LearningResourceDocument = HydratedDocument<LearningResource>;

@Schema({ timestamps: true })
export class LearningResource {
  @Prop()
  idResource: string;

  @Prop()
  idOVA: string;

  @Prop()
  type: string;

  @Prop()
  resourceName: string;

  @Prop()
  url: string;

  @Prop()
  size: string;

  @Prop()
  format: string;
}

export const LearningResourceSchema =
  SchemaFactory.createForClass(LearningResource);
