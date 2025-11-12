import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScormManifestDocument = HydratedDocument<ScormManifest>;

@Schema({ timestamps: true })
export class ScormManifest {
  @Prop()
  idManifest: string;

  @Prop()
  idPackage: string;

  @Prop()
  identifier: string;

  @Prop()
  version: string;
}

export const ScormManifestSchema = SchemaFactory.createForClass(ScormManifest);
