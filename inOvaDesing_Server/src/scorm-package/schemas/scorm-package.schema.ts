import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScormPackageDocument = HydratedDocument<ScormPackage>;

@Schema({ timestamps: true })
export class ScormPackage {
  @Prop()
  idPackage: string;

  @Prop()
  idOVA: string;

  @Prop()
  version: string;

  @Prop()
  state: string;

  @Prop()
  zipUrl: string;
}

export const ScormPackageSchema = SchemaFactory.createForClass(ScormPackage);
